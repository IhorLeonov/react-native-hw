import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const ButtonBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};
