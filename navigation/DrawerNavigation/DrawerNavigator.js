import { TouchableOpacity } from "react-native";

// navigation hook import
import { useNavigation } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Color
import Colors from "../../styles/Colors";

// Import Icons
import { AntDesign } from "@expo/vector-icons";

// Import Screens Components
import Home from "../../screens/Home";
import About from "../../screens/About";
import Contact from "../../screens/Contact";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: { color: Colors.white },
        headerTintColor: Colors.white,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <AntDesign name="search1" color={Colors.white} size={22} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: { paddingHorizontal: 20 },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        component={Home}
        options={{
          headerTitle: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="phone" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
