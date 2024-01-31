import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingSpinner = () => (
	<View style={[styles.container, styles.horizontal]}>
		<ActivityIndicator size="large" color="#00ff00" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 10,
	},
});

export default LoadingSpinner;
