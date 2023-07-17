import { mduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../nested/DefaultPostsScreen";
import CommentsScreen from "../nested/DefaultPostsScreen";
import MapScreen from "../nested/DefaultPostsScreen";
import { LogoutButton } from "../../components/LogoutButton";
import { ButtonBack } from "../../components/ButtonBack";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerLeft: ButtonBack,
      }}
    >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Публикации",
          headerRight: LogoutButton,
          headerLeft: false,
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Комментарии" }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Карта" }}
      />
    </NestedScreen.Navigator>
  );
}
