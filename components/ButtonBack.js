import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { iconsGenerator } from "../assets/images/iconsGenerator";

const arrowleftIcon = iconsGenerator("arrowleft", 24, "black");

export const ButtonBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => navigation.goBack()}
    >
      {arrowleftIcon}
    </TouchableOpacity>
  );
};
