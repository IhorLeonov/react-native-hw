import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function Map() {
  const route = useRoute();
  const { name } = route.params;
  const { longitude, latitude } = route.params.location;

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: "0.001",
          longitudeDelta: "0.006",
        }}
      >
        <Marker
          coordinate={{
            longitude,
            latitude,
          }}
          title={name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // mapStyle: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  // },
});
