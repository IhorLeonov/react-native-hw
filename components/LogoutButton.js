import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { authSignOutUser } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => dispatch(authSignOutUser())}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
