import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function Posts() {
  const {
    params: { email, password },
  } = useRoute();

  console.log(email, password);
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
