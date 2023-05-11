import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity, // имитирует кнопку
    Platform,
    KeyboardAvoidingView, // помогает правильно скрывать клавиатуру
    Keyboard,
    TouchableWithoutFeedback, // улавливает клики по экрану
    Dimensions,
  } from "react-native";
  import { useState, useCallback, useEffect } from "react";
  
  import BgImage from "../assets/images/bg-image.jpg";
  import GirlImage from "../assets/images/photo-girl.png";
  
  import { useFonts } from "expo-font";
  import * as SplashScreen from "expo-splash-screen";
  
  SplashScreen.preventAutoHideAsync();
  
  const initialState = {
    email: "",
    password: "",
  };
  
  export default function Login() {
    console.log(Platform.OS);
    const [fontsLoaded, error] = useFonts({
      "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    });
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    
    const [dimensions, setDimensions] = useState(
      Dimensions.get("window").width - 16 * 2
    );
  
    useEffect(() => {
      const onChange = () => {
        const width = Dimensions.get("window").width - 16 * 2;
  
        setDimensions(width);
      };
      Dimensions.addEventListener("change", onChange);
  
      return () => {
        Dimensions.removeEventListener("change", onChange);
      };
    }, []);
    
    const showKeyboard = () => {
      setIsShowKeyboard(true);
    };
    const hideKeyboard = () => {
      setIsShowKeyboard(false);
      Keyboard.dismiss();
    };
    const onSubmit = () => {
      hideKeyboard();
      console.log(state);
      setState(initialState);
    };
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
  
    return (
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <ImageBackground style={styles.bgImage} source={BgImage}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.whiteWall}>
              <Text style={styles.title}>Войти</Text>
                <View
                  style={{
                    ...styles.form,
                    marginBottom: isShowKeyboard ? 32 : 78,
                    width: dimensions,
                  }}
                >
                  <View style={{ marginTop: 32 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Адрес электронной почты"
                      onFocus={showKeyboard}
                      onBlur={hideKeyboard}
                      value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, email: value }))
                      }
                    />
                  </View>
                  <View style={{ marginTop: 16 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Пароль"
                      secureTextEntry={true}
                      onFocus={showKeyboard}
                      onBlur={hideKeyboard}
                      value={state.password}
                      maxLength={20}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text style={styles.showPassword}>Показать</Text>
                  </View>
                  <TouchableOpacity
                    onPress={onSubmit}
                    style={{
                      ...styles.btn,
                      display: isShowKeyboard ? "none" : "flex",
                    }}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.btnTitle}>Войти</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...styles.textLogin,
                      display: isShowKeyboard ? "none" : "flex",
                    }}
                  >
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
      },
      whiteWall: {
        marginTop: "auto",
        position: "relative",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        alignItems: "center",
      },
      form: {
      },
      title: {
        marginTop: 32,
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
      },
      input: {
        position: "relative",
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        padding: 16,
        paddingBottom: 15,
        color: "#212121",
        fontFamily: "Roboto-Regular",
      },
      showPassword: {
        position: "absolute",
        top: 16,
        right: 16,
        
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
      },
      btn: {
        backgroundColor: "#FF6C00",
        height: 51,
        borderRadius: 100,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
      },
      btnTitle: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",
      },
      textLogin: {
        marginTop: 16,
        color: "#1B4371",
        textAlign: "center",
    
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
      },
    });