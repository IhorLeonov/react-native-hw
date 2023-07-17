import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
// import { ButtonBack } from "./components/ButtonBack";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const AuthStack = createStackNavigator();

export const router = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    // fontFamily: "Roboto-Medium",
    // fontWeight: 500,
    // fontSize: 17,
    // lineHeight: 22,
    // Не работают!
  },
});
