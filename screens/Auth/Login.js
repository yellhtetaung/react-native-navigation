import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../styles/Colors";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const SubmitHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={"light-content"} />
      <Text style={styles.header}>Login</Text>

      {/* Start Form Design */}
      <View style={styles.form}>
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <Ionicons name="person-outline" size={35} color={Colors.white} />
          </View>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder={"Enter username"}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <MaterialCommunityIcons
              name="shield-key-outline"
              size={35}
              color={Colors.white}
            />
          </View>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"Enter password"}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={SubmitHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* End Form Design */}

      {/* Start Go To Reigster */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Enter Go To Reigster */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  header: {
    fontSize: 40,
    color: Colors.primary,
    fontWeight: "800",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },

  form: {
    gap: 25,
    marginTop: 30,
  },

  inputBox: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: "row",
    borderRadius: 10,
    elevation: 5,

    overflow: "hidden",
  },

  label: {
    width: "20%",
    height: "100%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    flex: 1,
    fontSize: 17,
    paddingStart: 15,
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

  footer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },

  footerText: {
    fontSize: 17,
  },

  footerButtonText: {
    fontSize: 17,
    color: Colors.danger,
    fontWeight: "800",
  },
});
