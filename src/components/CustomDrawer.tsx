import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { styles } from "../styles/style";

export default function CustomDrawer(props: any) {

  const user = auth.currentUser;

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DrawerContentScrollView
  {...props}
  contentContainerStyle={{
    paddingTop: 0,
  }}
>

      

      <View style={styles.drawerHeader}>

        <Text style={styles.drawerHello}>
          Olá!
        </Text>

        <Text style={styles.drawerEmail}>
          {user?.email}
        </Text>

      </View>

      

      <View style={{ flex: 1 }}>

       <DrawerItem
  label="Home"
  labelStyle={{ color: '#fff' }}
  onPress={() => props.navigation.navigate("Home")}
/>

      </View>

      

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >

        <Text style={styles.logoutText}>
          Logout
        </Text>

      </TouchableOpacity>

    </DrawerContentScrollView>
  );
}