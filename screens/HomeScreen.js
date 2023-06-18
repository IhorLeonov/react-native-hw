import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CreatePostsScreen from "./main/CreatePostsScreen";
import ProfileScreen from "./main/ProfileScreen";
import PostsScreen from "./main/PostsScreen";

const BottomTabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  const postsIcon = (color) => (
    <AntDesign name="appstore-o" size={24} color={color} />
  );
  const createIcon = (color) => (
    <View style={styles.createIcon}>
      <AntDesign name="plus" size={13} color="#fff" />
    </View>
  );
  const profileIcon = (color) => (
    <Feather name="user" size={24} color={color} />
  );

  const buttonBack = () => (
    <AntDesign
      style={{ marginLeft: 10 }}
      name="arrowleft"
      size={24}
      color="black"
      onPress={() => navigation.navigate("Posts")}
    />
  );

  const logoutButton = () => (
    <MaterialIcons
      style={{ marginRight: 10 }}
      name="logout"
      size={24}
      color="#BDBDBD"
      onPress={() => navigation.navigate("Comments")}
    />
  );

  // const {
  //   params: {},s
  // } = useRoute();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: { height: 70, paddingBottom: 13 },
      }}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRight: logoutButton,
          tabBarIcon: ({ focused, size, color }) => postsIcon(color),
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          tabBarStyle: { display: "none" },
          headerLeft: buttonBack,
          tabBarIcon: ({ focused, size, color }) => createIcon(color),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => profileIcon(color),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
  createIcon: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
