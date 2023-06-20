import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialIcons, EvilIcons, AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function CreatePosts() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const showKeyboard = () => {
    setIsShowKeyboard(true);
  };

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.imageContainer}>
            <View style={styles.imageUploadCircle}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </View>
          </View>
          <Text style={styles.imageLabel}>Загрузите фото</Text>
          <View style={{ marginTop: 32 }}>
            <TextInput
              style={styles.inputName}
              placeholder="Название..."
              onFocus={showKeyboard}
              onBlur={hideKeyboard}
              // value={state.login}
              // onChangeText={(value) =>
              //   setState((prevState) => ({ ...prevState, login: value }))
              // }
            />
          </View>
          <View style={styles.inputLocationView}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
            <TextInput
              style={styles.inputLocation}
              placeholder="Местность..."
              onFocus={showKeyboard}
              onBlur={hideKeyboard}
              // value={state.login}
              // onChangeText={(value) =>
              //   setState((prevState) => ({ ...prevState, login: value }))
              // }
            ></TextInput>
          </View>

          <TouchableOpacity
            style={{
              ...styles.btn,
              // display: isShowKeyboard ? "none" : "flex",
            }}
            activeOpacity={0.8}
            // onPress={onSubmit}
          >
            <Text style={styles.btnTitle}>Опубликовать</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDelete} activeOpacity={0.8}>
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  imageContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageUploadCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLabel: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputName: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputLocationView: {
    marginTop: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
  },
  inputLocation: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btn: {
    // backgroundColor: "#FF6C00",
    backgroundColor: "#F6F6F6",
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
    // color: "#FFFFFF",
    color: "#BDBDBD",
  },
  buttonDelete: {
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    // marginTop: "auto",
    marginBottom: 6,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
