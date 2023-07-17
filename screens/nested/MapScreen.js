import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 50.48809044975979,
          latitude: 30.471820198771553,
          latitudeDelta: "0,001",
          longitudeDelta: "0,005",
        }}
      >
        <Marker
          coordinate={{
            longitude: 50.48809044975979,
            latitude: 30.471820198771553,
          }}
          title="Travel photo"
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
