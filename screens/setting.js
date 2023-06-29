import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Setting Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 35,
    color: Colors.primary,
    fontWeight: "800",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
