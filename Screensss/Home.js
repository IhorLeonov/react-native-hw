import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const HomeNav = createStackNavigator();

export default function Home() {
  const navigation = useNavigation();

  const {
    params: {},
  } = useRoute();

  return (
    <HomeNav.Navigator screenOptions={{ headerStyle: {} }}>
      <HomeNav.Screen name="PostsScreen" component={PostsScreen} options={{}} />
      <HomeNav.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <HomeNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeNav.Navigator>
  );
}
