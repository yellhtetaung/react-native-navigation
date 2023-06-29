import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Page</Text>
      <Text style={styles.subHeader}>
        This page is using Bottom Tabs and Drawer
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TopTab")}
      >
        <Text style={styles.buttonText}>Go To Top Tabs Navigation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    gap: 20,
  },

  header: {
    fontSize: 35,
    color: Colors.primary,
    fontWeight: "800",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },

  subHeader: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: "800",
    textAlign: "center",
  },

  button: {
    backgroundColor: Colors.primary,
    alignSelf: "center",
    borderRadius: 5,
    elevation: 10,

    padding: 15,
    paddingHorizontal: 30,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
