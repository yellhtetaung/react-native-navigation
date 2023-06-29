import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

import { useNavigation } from "@react-navigation/native";

export default function Contact() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.buttonText}>Click toggle drawer</Text>
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
