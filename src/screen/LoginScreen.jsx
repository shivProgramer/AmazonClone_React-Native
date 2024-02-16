import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { Component, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              color: "#041E42",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            {" "}
            Login In to Your Account{" "}
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={{ marginLeft: 8, color: "gray" }}
            />
            <TextInput
              placeholder="enter your Email "
              style={{
                color: "gray",
                width: 300,
                marginVertical: 5,
                fontSize: email ? 16 : 16,
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock"
              size={24}
              color="black"
              style={{ marginLeft: 8, color: "gray" }}
            />
            <TextInput
              placeholder="enter your password "
              style={{
                color: "gray",
                width: 300,
                marginVertical: 5,
                fontSize: password ? 16 : 16,
              }}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text> Keep me logged in </Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            {" "}
            Forgot Password{" "}
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#FEBE10",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login{" "}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => nevigation.navigate("Register")}
            style={{ marginTop: 10 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an account? Sign Up{" "}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
