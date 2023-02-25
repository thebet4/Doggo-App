import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, WelcomeScreen } from "@layout/screens/auth";

export type AuthStackParamsList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
