import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

export async function addTask(userId: string, task: any) {
  return addDoc(collection(db, "users", userId, "tasks"), task);
}

export async function getTasks(userId: string) {
  const q = query(collection(db, "users", userId, "tasks"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteTask(userId: string, taskId: string) {
  return deleteDoc(doc(db, "users", userId, "tasks", taskId));
}

export async function updateTask(userId: string, taskId: string, data: any) {
  return updateDoc(doc(db, "users", userId, "tasks", taskId), data);
}