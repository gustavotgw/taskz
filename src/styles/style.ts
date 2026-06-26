import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  header: {
    marginTop: 6,
    marginBottom: 14,
    fontSize: 26,
    fontWeight: "800",
    color: "#e8f0ff",
  },

  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
},

headerContent: {
  marginLeft: 15,
  flex: 1,
},

userEmail: {
  color: "#9fb0da",
  fontSize: 13,
  marginTop: -6,
},

  card: {
    backgroundColor: "#111b33",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#223057",
  },

  cardTitle: {
    color: "#e8f0ff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  label: {
    color: "#b9c7e6",
    marginTop: 10,
    marginBottom: 6,
    fontSize: 13,
  },

  input: {
    backgroundColor: "#0f1730",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#26365f",
    color: "#e8f0ff",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  priorityRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  priorityBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#2b3a66",
    backgroundColor: "#0f1730",
  },

  priorityBtnActive: {
    borderColor: "#7aa2ff",
    backgroundColor: "#1a2a54",
  },

  priorityBtnText: {
    color: "#b9c7e6",
    fontWeight: "700",
    fontSize: 13,
  },

  priorityBtnTextActive: {
    color: "#e8f0ff",
  },

  primaryBtn: {
    marginTop: 6,
    backgroundColor: "#2f6fed",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },

  primaryBtnText: {
    color: "white",
    fontWeight: "800",
  },

  secondaryBtn: {
    marginTop: 10,
    backgroundColor: "#253258",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  secondaryBtnText: {
    color: "#e8f0ff",
    fontWeight: "700",
  },

  listHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 10,
    alignItems: "baseline",
  },

  listHeaderText: {
    color: "#e8f0ff",
    fontSize: 16,
    fontWeight: "800",
  },

  listHeaderMeta: {
    color: "#9fb0da",
    fontSize: 13,
    fontWeight: "700",
  },

  taskRow: {
    flexDirection: "row",
    backgroundColor: "#111b33",
    borderWidth: 1,
    borderColor: "#223057",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    gap: 10,
  },

  checkbox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2b3a66",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f1730",
  },

  checkboxDone: {
    borderColor: "#3ddc97",
    backgroundColor: "#0c2a1c",
  },

  checkboxText: {
    color: "#e8f0ff",
    fontWeight: "900",
    fontSize: 16,
  },

  taskMain: {
    flex: 1,
    justifyContent: "center",
  },

  taskTopLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "flex-start",
  },

  taskTitle: {
    color: "#e8f0ff",
    fontSize: 14,
    fontWeight: "800",
    flex: 1,
  },

  taskTitleDone: {
    color: "#9fb0da",
    textDecorationLine: "line-through",
  },

  badges: {
    alignItems: "flex-end",
  },

  badgePriority: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: "#0f1730",
    borderColor: "#2b3a66",
  },

  badgePriorityHigh: {
    borderColor: "#ff6b6b",
  },

  badgePriorityMed: {
    borderColor: "#ffd166",
  },

  badgePriorityLow: {
    borderColor: "#3aaed8",
  },

  badgePriorityText: {
    color: "#e8f0ff",
    fontWeight: "900",
    fontSize: 12,
  },

  taskStatus: {
    marginTop: 6,
    color: "#b9c7e6",
    fontSize: 13,
    fontWeight: "700",
  },

  taskStatusDone: {
    color: "#84f7c7",
  },

  taskActions: {
    justifyContent: "center",
    gap: 8,
    alignItems: "flex-end",
  },

  actionBtn: {
    backgroundColor: "#1a2a54",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  actionBtnText: {
    color: "#e8f0ff",
    fontWeight: "800",
    fontSize: 12,
  },

  deleteBtn: {
    backgroundColor: "#3a1010",
    borderWidth: 1,
    borderColor: "#7a2d2d",
  },

  deleteBtnText: {
    color: "#ffb3b3",
  },

  emptyState: {
    padding: 18,
    alignItems: "center",
  },

  emptyText: {
    color: "#9fb0da",
    fontWeight: "700",
  },

  footerHint: {
    marginTop: 10,
    marginBottom: 6,
    color: "#7f93c8",
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
  fontSize: 24,
  fontWeight: "800",
  color: "#e8f0ff",
  marginBottom: 4,
},

subtitle: {
  color: "#9fb0da",
  marginBottom: 20,
  fontSize: 13,
},

button: {
  backgroundColor: "#2f6fed",
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 6,
},

buttonText: {
  color: "#fff",
  fontWeight: "800",
},

link: {
  marginTop: 14,
  color: "#7aa2ff",
  textAlign: "center",
  fontWeight: "700",
},
  // ===== LOGIN / CADASTRO =====

authContainer: {
  flex: 1,
  backgroundColor: "#0b1220",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
},

authCard: {
  width: "100%",
  maxWidth: 400,
  backgroundColor: "#111b33",
  borderRadius: 18,
  padding: 24,
  borderWidth: 1,
  borderColor: "#223057",
  elevation: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 6,
},

authTitle: {
  fontSize: 28,
  fontWeight: "800",
  color: "#e8f0ff",
  textAlign: "center",
  marginBottom: 6,
},

authSubtitle: {
  color: "#9fb0da",
  textAlign: "center",
  marginBottom: 24,
  fontSize: 14,
},

authInput: {
  backgroundColor: "#0f1730",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#26365f",
  color: "#e8f0ff",
  paddingHorizontal: 14,
  paddingVertical: 14,
  marginBottom: 14,
},

authButton: {
  backgroundColor: "#2f6fed",
  borderRadius: 10,
  paddingVertical: 14,
  alignItems: "center",
  marginTop: 8,
},

authButtonText: {
  color: "#fff",
  fontWeight: "800",
  fontSize: 16,
},

authLink: {
  marginTop: 18,
  color: "#7aa2ff",
  textAlign: "center",
  fontWeight: "700",
  fontSize: 14,
},
drawerHeader: {
  backgroundColor: "#111b33",
  paddingVertical: 16,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderBottomColor: "#223057",
},

drawerHello: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},

drawerEmail: {
  color: "#b9c7e6",
  fontSize: 13,
  marginTop: 4,
},

logoutButton: {
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderTopWidth: 1,
  borderTopColor: "#223057",
},

logoutText: {
  color: "#ff6b6b",
  fontSize: 15,
  fontWeight: "bold",
},
});