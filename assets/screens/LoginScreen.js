import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../img/logo.jpg")} style={styles.img} />
        <TextInput style={styles.input} placeholder="Username" />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("CategoryScreen");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.leftText}>Forgot Password</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogoutScreen");
            }}
          >
            <Text style={styles.rightText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  input: {
    height: 50,
    width: 300,
    backgroundColor: "#D4CACA",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  loginButton: {
    marginTop: 50,
    backgroundColor: "#FF0000",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    paddingTop: 15,
    flexDirection: "row",
    gap: 100,
    marginBottom: 50,
  },
  leftText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: "auto",
  },
  rightText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
  },
});

export default LoginScreen;
