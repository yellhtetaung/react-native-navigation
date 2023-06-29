import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import DrawerNavigator from "../DrawerNavigation/DrawerNavigator";
import Setting from "../../screens/setting";

import Colors from "../../styles/Colors";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: Colors.white },
          title: "Setting",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
