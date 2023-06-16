import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export default function Posts() {
  const {
    params: { email, password },
  } = useRoute();

  console.log(email, password);
  return <Text>Posts</Text>;
}
