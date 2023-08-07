import { router } from "../router";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export const Main = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [user, setUser] = useState(null);

  // const state = useSelector((state) => state);
  // console.log(state);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  useEffect(() => {}, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = router(user);
  console.log("User:", user);

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {routing}
    </NavigationContainer>
  );
};
