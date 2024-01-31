import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import THEME from "src/THEME";
const ProductMap = ({ latitude, longitude }) => {
	const [mapInitialized, setMapInitialized] = useState(false);

	const onMapReady = async () => {
		if (mapInitialized) {
			return;
		}

		// initialize map data here

		setMapInitialized(true);
	};

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				onMapReady={() => onMapReady()}
				minHeight={10}
				initialRegion={{
					latitude: Number(latitude),
					longitude: Number(longitude),
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{
						latitude: Number(latitude),
						longitude: Number(longitude),
					}}
				/>
			</MapView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		marginTop: 35,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	map: {
		width: "100%",
		height: 215,
	},
});
export default ProductMap;
