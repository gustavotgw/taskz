import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log("Erro registro:", e);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Cadastre-se para continuar</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#8aa0c9"
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#8aa0c9"
          secureTextEntry
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#111b33",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#223057",

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
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
  },

  input: {
    backgroundColor: "#0f1730",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#26365f",
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: "#e8f0ff",
    marginBottom: 12,
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
});