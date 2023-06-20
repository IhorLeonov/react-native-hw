import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView, // помогает правильно скрывать клавиатуру
  Keyboard,
  TouchableWithoutFeedback, // улавливает клики по экрану
  Dimensions,
} from "react-native";

import BgImage from "../../assets/images/bg-image.jpg";

import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const navigation = useNavigation();

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
    const subscription = Dimensions.addEventListener("change", onChange);

    return () => subscription?.remove();
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

    navigation.navigate("Home", {
      screen: "PostsScreen",
      params: { email: state.email, password: state.password },
    });

    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
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
                  style={{
                    ...styles.btn,
                    display: isShowKeyboard ? "none" : "flex",
                  }}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text style={styles.btnTitle}>Войти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 16, alignSelf: "center" }}
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text
                    style={{
                      ...styles.toRegisterLink,
                      display: isShowKeyboard ? "none" : "flex",
                    }}
                  >
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
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
  form: {},
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
  toRegisterLink: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
