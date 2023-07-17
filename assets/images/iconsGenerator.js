import { AntDesign, Feather } from "@expo/vector-icons";

export const iconsGenerator = (name, size, color) => {
  switch (name) {
    case "menu":
      return <AntDesign name="appstore-o" size={size} color={color} />;
    case "plus":
      return <AntDesign name="plus" size={size} color={color} />;
    case "user":
      return <Feather name="user" size={size} color={color} />;
    case "arrowleft":
      return <AntDesign name="arrowleft" size={size} color={color} />;
    default:
      return;
  }
};
