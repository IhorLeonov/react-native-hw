// import { useNavigation, useRoute } from "@react-navigation/native";

import CreatePostsScreen from "./main/CreatePostsScreen";
import ProfileScreen from "./main/ProfileScreen";
import BottomNavigation from "./main/BottomNavigation";

import { createStackNavigator } from "@react-navigation/stack";

const HomeNav = createStackNavigator();

export default function Home() {
  // const {
  //   params: {},
  // } = useRoute();

  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      {/* <HomeNav.Screen name="Create" component={CreatePostsScreen} /> */}
      {/* <HomeNav.Screen name="Profile" component={ProfileScreen} /> */}
    </HomeNav.Navigator>
  );
}
