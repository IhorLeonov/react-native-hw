import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRight: () => (
            <MaterialIcons
              style={{ marginRight: 15 }}
              name="logout"
              size={24}
              color="#BDBDBD"
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <AntDesign
              style={{ marginLeft: 15 }}
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Posts")}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
  },
});

export default BottomNavigation;
