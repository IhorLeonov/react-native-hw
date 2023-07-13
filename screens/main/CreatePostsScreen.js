import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

import {
  MaterialIcons,
  EvilIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CreatePosts() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLibraryPermission, setHasLibraryPermission] = useState();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  const requestPermissionAgain = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const libraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasLibraryPermission(libraryPermission.status === "granted");
    })();
  }, []);

  const toggleCameraType = () => {
    setType((type) =>
      type === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync(null);
      // await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const sendState = () => {
    navigation.navigate("Posts", { photo, name });
    setPhoto("");
  };

  const showKeyboard = () => {
    setIsShowKeyboard(true);
  };

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Permissions for camera not granted.</Text>
        <Text>
          Please change this in{" "}
          <Text style={styles.settings} onPress={requestPermissionAgain}>
            settings
          </Text>
          .
        </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.cameraContainer}>
            {!photo ? (
              <Camera type={type} style={styles.camera} ref={setCameraRef}>
                <TouchableOpacity
                  style={styles.snapButton}
                  activeOpacity={0.8}
                  onPress={takePhoto}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteAndReversBtn}
                  activeOpacity={0.8}
                  onPress={toggleCameraType}
                >
                  <Ionicons
                    name="camera-reverse-outline"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </Camera>
            ) : (
              <View style={styles.cameraContainer}>
                <Image source={{ uri: photo }} style={styles.photo} />
                <TouchableOpacity
                  style={styles.deleteAndReversBtn}
                  activeOpacity={0.8}
                  onPress={() => {
                    setPhoto("");
                  }}
                >
                  <MaterialIcons name="delete" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <Text style={styles.imageLabel}>Загрузите фото</Text>
          <View style={{ marginTop: 32 }}>
            <TextInput
              style={styles.inputName}
              placeholder="Название..."
              onFocus={showKeyboard}
              onBlur={hideKeyboard}
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>
          <View style={styles.inputLocationView}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
            <TextInput
              style={styles.inputLocation}
              placeholder="Местность..."
              onFocus={showKeyboard}
              onBlur={hideKeyboard}
              // value={location}
              // onChangeText={(value) =>
              //   setLocation(value)
              // }
            ></TextInput>
          </View>

          <TouchableOpacity
            style={{
              ...styles.postBtn,
              // display: isShowKeyboard ? "none" : "flex",
            }}
            activeOpacity={0.8}
            onPress={sendState}
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
  cameraContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#E8E8E8",
    overflow: "hidden",
    alignItems: "center",
  },
  photo: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  snapButton: {
    position: "absolute",
    top: 90,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.30)",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteAndReversBtn: {
    position: "absolute",
    bottom: 15,
  },
  reverseBtn: {
    position: "absolute",
    top: 17,
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
  postBtn: {
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
    color: "#BDBDBD",
  },
  buttonDelete: {
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    marginBottom: 6,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  settings: {
    fontWeight: "700",
    color: "blue",
    textDecorationLine: "underline",
  },
});
