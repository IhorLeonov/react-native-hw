import { router } from "../router";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/operations";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export const Main = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const dispatch = useDispatch();
  const { stateChange } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = router(stateChange);
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {routing}
    </NavigationContainer>
  );
};
