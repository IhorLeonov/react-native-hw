import { StyleSheet, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonBack } from "../components/ButtonBack";
import { LogoutButton } from "../components/LogoutButton";

import CreatePostsScreen from "./main/CreatePostsScreen";
import ProfileScreen from "./main/ProfileScreen";
import PostsScreen from "./main/PostsScreen";

const BottomTabs = createBottomTabNavigator();

export default function Home() {
  const postsButton = (color) => (
    <AntDesign name="appstore-o" size={24} color={color} />
  );
  const createButton = (color) => (
    <View style={styles.createButton}>
      <AntDesign name="plus" size={13} color="#fff" />
    </View>
  );
  const profileButton = (color) => (
    <Feather name="user" size={24} color={color} />
  );

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: { height: 70, paddingTop: 15 },
        tabBarItemStyle: {},
      }}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRight: LogoutButton,
          tabBarIcon: ({ focused, size, color }) => postsButton(color),
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          tabBarStyle: { display: "none" },
          headerLeft: ButtonBack,
          tabBarIcon: ({ focused, size, color }) => createButton(color),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => profileButton(color),
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
  createButton: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
