import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Button } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOut from "../assets/images/Log-out";

const HomeNav = createStackNavigator();

export default function Home() {
  const navigation = useNavigation();
  const {
    params: {},
  } = useRoute();

  return (
    <HomeNav.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
      }}
    >
      <HomeNav.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          // headerLeft: false,
          headerRight: () => (
            <LogOut
              style={{ marginRight: 10 }}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <HomeNav.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <HomeNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeNav.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
});
