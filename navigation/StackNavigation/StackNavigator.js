import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens Components
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import BottomTab from "../BottomTabsNavigation/BottomTab";
import Search from "../../screens/Search";
import TopTab from "../TopTabsNavigation/TopTab";
import Colors from "../../styles/Colors";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        // for disable header
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          animation: "simple_push",
          headerShown: true,
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: Colors.white },
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen name="TopTab" component={TopTab} />
    </Stack.Navigator>
  );
}
