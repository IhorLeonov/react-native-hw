import { createStackNavigator } from "@react-navigation/stack";

import Register from "./screens/auth/RegistrationScreen";
import Login from "./screens/auth/LoginScreen";
import Home from "./screens/Home";

const AuthStack = createStackNavigator();

export const router = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
