import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { authSignOutUser } from "../redux/auth/operations";

export const LogoutButton = () => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => authSignOutUser()}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
