import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Chat from "../../screens/Chat";
import Albums from "../../screens/Albums";
import Colors from "../../styles/Colors";

export default function TopTab() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.primary },
        tabBarLabelStyle: { color: Colors.white, fontWeight: "bold" },
      }}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Album" component={Albums} />
    </Tab.Navigator>
  );
}
