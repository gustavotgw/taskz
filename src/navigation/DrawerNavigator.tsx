import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 200, 
          backgroundColor: "#0b1220",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}