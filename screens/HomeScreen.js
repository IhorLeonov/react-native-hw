import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonBack } from "../components/ButtonBack";
import { iconsGenerator } from "../assets/images/iconsGenerator";

import CreatePostsScreen from "./main/CreatePostsScreen";
import ProfileScreen from "./main/ProfileScreen";
import PostsScreen from "./main/PostsScreen";

const BottomTabs = createBottomTabNavigator();

import { useSelector } from "react-redux";
import {
  selectLogin,
  selectStateChange,
  selectUserId,
} from "../redux/auth/selectors";

export default function Home() {
  const login = useSelector(selectLogin);
  const userId = useSelector(selectUserId);
  const stateChange = useSelector(selectStateChange);

  console.log("Login", login);
  console.log("UserId", userId);
  console.log("StateChange", stateChange);

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        // headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: { height: 70, paddingTop: 15 },
        // tabBarItemStyle: {},
      }}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) =>
            iconsGenerator("menu", 24, color),
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          tabBarStyle: { display: "none" },
          headerLeft: ButtonBack,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.createButton}>
              {iconsGenerator("plus", 13, "#fff")}
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) =>
            iconsGenerator("user", 24, color),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
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
