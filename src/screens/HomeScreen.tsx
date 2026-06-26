import React, { useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "../services/firebase";
import { Task } from "../types/Task";
import TaskItem from "../components/TaskItem";
import { styles } from "../styles/style";

export default function HomeScreen({ navigation }: any) {
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<1 | 2 | 3>(2);
  const [editingId, setEditingId] = useState<string | null>(null);

  const prioritiesMap = {
    1: "Alta",
    2: "Média",
    3: "Baixa",
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setUserEmail(user.email ?? "");
      } else {
        setUserId(null);
        setUserEmail("");
      }
    });

    return unsub;
  }, []);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, "tasks"),
      where("userId", "==", userId)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data: Task[] = snapshot.docs.map((doc) => {
        const d = doc.data() as any;

        return {
          id: doc.id,
          title: d.title ?? "",
          priority: d.priority ?? 2,
          done: d.done ?? false,
          createdAt: d.createdAt ?? Date.now(),
        };
      });

      setTasks(data);
    });

    return unsub;
  }, [userId]);

  function resetForm() {
    setTitle("");
    setPriority(2);
    setEditingId(null);
  }

  async function upsertTask() {
    if (!title.trim() || !userId) return;

    if (editingId) {
      await updateDoc(doc(db, "tasks", editingId), {
        title: title.trim(),
        priority,
      });

      resetForm();
      return;
    }

    await addDoc(collection(db, "tasks"), {
      title: title.trim(),
      priority,
      done: false,
      createdAt: Date.now(),
      userId,
    });

    resetForm();
  }

  async function toggleDone(taskId: string, current: boolean) {
    await updateDoc(doc(db, "tasks", taskId), {
      done: !current,
    });
  }

  async function removeTask(taskId: string) {
    await deleteDoc(doc(db, "tasks", taskId));
  }

  function startEdit(task: Task) {
    setEditingId(task.id);
    setTitle(task.title);
    setPriority(task.priority);
  }

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      if (a.priority !== b.priority) return a.priority - b.priority;
      return b.createdAt - a.createdAt;
    });
  }, [tasks]);

  if (!userId) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Login necessário</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      {}
      <View style={styles.headerRow}>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={32} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.header}>Taskz</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>

      </View>

      {}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          {editingId ? "Editar tarefa" : "Criar tarefa"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa"
          value={title}
          onChangeText={setTitle}
        />

        
        <Text style={{ color: "#fff", marginTop: 10, marginBottom: 10 }}>
          Prioridade
        </Text>

        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>

          <TouchableOpacity
            onPress={() => setPriority(1)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: priority === 1 ? "#ef4444" : "#1f2937",
            }}
          >
            <Text style={{ color: "#fff" }}>🔥 Alta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPriority(2)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: priority === 2 ? "#f59e0b" : "#1f2937",
            }}
          >
            <Text style={{ color: "#fff" }}>⚡ Média</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPriority(3)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: priority === 3 ? "#10b981" : "#1f2937",
            }}
          >
            <Text style={{ color: "#fff" }}>🌿 Baixa</Text>
          </TouchableOpacity>

        </View>

        
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={upsertTask}
        >
          <Text style={styles.primaryBtnText}>
            {editingId ? "Salvar" : "Criar"}
          </Text>
        </TouchableOpacity>

        {editingId && (
          <TouchableOpacity onPress={resetForm}>
            <Text style={styles.secondaryBtnText}>Cancelar</Text>
          </TouchableOpacity>
        )}

      </View>

      
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            prioritiesMap={prioritiesMap}
            onToggle={() => toggleDone(item.id, item.done)}
            onEdit={startEdit}
            onDelete={removeTask}
          />
        )}
      />

    </SafeAreaView>
  );
}