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

export default function Register() {
  const navigation = useNavigation();

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const SubmitHandler = () => {
    if (password === confirmPassword) {
      if (username && email && confirmPassword) {
        navigation.navigate("Home");
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={"light-content"} />
      <Text style={styles.header}>Register</Text>

      {/* Start Form Design */}
      <View style={styles.form}>
        {/* input box for username */}
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <Ionicons name="person-outline" size={30} color={Colors.white} />
          </View>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder={"Enter username"}
            style={styles.textInput}
          />
        </View>

        {/* input box for email */}
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <Ionicons name="mail-outline" size={30} color={Colors.white} />
          </View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={"Enter email"}
            style={styles.textInput}
          />
        </View>

        {/* input box for password */}
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <MaterialCommunityIcons
              name="shield-key-outline"
              size={30}
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

        {/* input box for confirm password */}
        <View style={styles.inputBox}>
          <View style={styles.label}>
            <MaterialCommunityIcons
              name="shield-key-outline"
              size={30}
              color={Colors.white}
            />
          </View>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={"Enter confirm password"}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={SubmitHandler}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* End Form Design */}

      {/* Start Go To Reigster */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footerButtonText}>Login</Text>
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
