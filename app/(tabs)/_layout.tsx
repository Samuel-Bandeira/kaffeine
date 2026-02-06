import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function AppLayout() {
  return (
    <View style={{ flex: 1 }} className="bg-custom-bg">
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            title: "Login",
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
            title: "Register",
          }}
        />
      </Stack>
    </View>
  );
}
