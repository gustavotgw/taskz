import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Task } from "../types/Task";
import { styles } from "../styles/style";

interface Props {
  item: Task;
  prioritiesMap: Record<1 | 2 | 3, string>;
  onToggle(id: string): void;
  onEdit(task: Task): void;
  onDelete(id: string): void;
}

export default function TaskItem({
  item,
  prioritiesMap,
  onToggle,
  onEdit,
  onDelete,
}: Props) {
  return (
    <View style={styles.taskRow}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          item.done && styles.checkboxDone,
        ]}
        onPress={() => onToggle(item.id)}
      >
        <Text style={styles.checkboxText}>
          {item.done ? "✓" : ""}
        </Text>
      </TouchableOpacity>

      <View style={styles.taskMain}>
        <View style={styles.taskTopLine}>
          <Text
            style={[
              styles.taskTitle,
              item.done && styles.taskTitleDone,
            ]}
          >
            {item.title}
          </Text>

          <View
            style={[
              styles.badgePriority,
              item.priority === 1 && styles.badgePriorityHigh,
              item.priority === 2 && styles.badgePriorityMed,
              item.priority === 3 && styles.badgePriorityLow,
            ]}
          >
            <Text style={styles.badgePriorityText}>
              {prioritiesMap[item.priority]}
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.taskStatus,
            item.done && styles.taskStatusDone,
          ]}
        >
          {item.done ? "Concluído" : "Pendente"}
        </Text>
      </View>

      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => onEdit(item)}
        >
          <Text style={styles.actionBtnText}>
            Editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.deleteBtn]}
          onPress={() => onDelete(item.id)}
        >
          <Text
            style={[
              styles.actionBtnText,
              styles.deleteBtnText,
            ]}
          >
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}