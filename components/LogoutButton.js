import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const LogoutButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => navigation.navigate("Comments")}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
