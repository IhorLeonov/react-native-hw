import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CommentsScreen from "./screens/CommentsScreen";
import MapScreen from "./screens/MapScreen";

const AuthStack = createStackNavigator();

const buttonBack = () => <AntDesign name="arrowleft" size={24} color="black" />;

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
    <AuthStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        headerBackImage: buttonBack,
      }}
    >
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Комментарии" }}
      />
      <AuthStack.Screen name="Map" component={MapScreen} />
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
});
