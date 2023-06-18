// import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import GirlImage from "../../assets/images/photo-girl.png";

const PostsScreen = () => {
  // const {
  //   params: { email, password },
  // } = useRoute();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ImageBackground
          style={styles.girlImage}
          source={GirlImage}
        ></ImageBackground>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.textName}>{}</Text>
          <Text style={styles.textEmail}>{}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  girlImage: { width: 60, height: 60 },
  textName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
