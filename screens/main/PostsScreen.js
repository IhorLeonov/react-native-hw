import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";

import GirlImage from "../../assets/images/photo-girl.png";

const PostsScreen = () => {
  const { params } = useRoute();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (params) {
      console.log(params.photo);
      setPosts((prevState) => [...prevState, params]);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.girlImage}
          source={GirlImage}
        ></ImageBackground>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.textName}>{}</Text>
          <Text style={styles.textEmail}>{}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item, index) => {
          return (
            <View style={styles.postContainer} id={item.id}>
              <Image source={{ uri: item.photo }} style={styles.postImage} />
            </View>
          );
        }}
      />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  girlImage: {
    width: 60,
    height: 60,
  },
  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  postContainer: { marginBottom: 10 },
  postImage: {
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 240,
    width: "100%",
  },
});
