import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./Screensss/RegistrationScreen";
import Login from "./Screensss/LoginScreen";
import Home from "./Screensss/Home";

const MainNav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainNav.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
        initialRouteName="Login"
      >
        <MainNav.Screen
          name="Register"
          component={Register}
          options={{ display: "none" }}
        />
        <MainNav.Screen name="Login" component={Login} />
        <MainNav.Screen name="Home" component={Home} />
      </MainNav.Navigator>
    </NavigationContainer>
  );
}
