import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth } from "./firebase/config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
    }
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = router(user);
  console.log(user);

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        {routing}
      </NavigationContainer>
    </Provider>
  );
}
