import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { styles } from "../styles/style";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Vai para Home após login
      navigation.replace("Home");
    } catch (e) {
      console.log("Erro login:", e);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.authContainer}
    >
      <View style={styles.authCard}>
        <Text style={styles.authTitle}>Login</Text>
        <Text style={styles.authSubtitle}>
          Entre para continuar
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#8aa0c9"
          value={email}
          onChangeText={setEmail}
          style={styles.authInput}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#8aa0c9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.authInput}
        />

        <TouchableOpacity
          style={styles.authButton}
          onPress={login}
        >
          <Text style={styles.authButtonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.authLink}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}