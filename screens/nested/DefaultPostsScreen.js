import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import GirlImage from "../../assets/images/photo-girl.png";

export default function DefaultPostsScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (params) {
      setPosts((prevState) => [...prevState, params.data]);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.avatar}
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
        renderItem={({ item, index }) => {
          return (
            <View style={styles.postContainer}>
              <Image source={{ uri: item.photo }} style={styles.postImage} />
              <Text style={styles.description}>{item.name}</Text>
              <View style={styles.linksBlockWrapper}>
                <TouchableOpacity
                  style={styles.commentsBtn}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Comments")}
                >
                  <Ionicons
                    name="ios-chatbubble-outline"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>

                <Text style={styles.commentsCount}>0</Text>

                <TouchableOpacity
                  style={styles.locationLink}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("Map", {
                      location: item.location,
                      name: item.name,
                    })
                  }
                >
                  <EvilIcons
                    style={{ marginRight: 4 }}
                    name="location"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text style={styles.locationText}>{item.locationName}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
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
  postContainer: { marginBottom: 32 },
  postImage: {
    borderRadius: 8,
    height: 240,
    width: "100%",
  },
  description: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: 500,
  },
  linksBlockWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  commentsBtn: { marginRight: 6 },
  commentsCount: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  locationLink: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
