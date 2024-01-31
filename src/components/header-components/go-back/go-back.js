import React from "react";
import { Pressable } from "react-native";
import ArrowBack from "assets/svg/arrowBack";
const GoBack = ({ navigation }) => {
	return (
		<Pressable
			onPress={() => navigation.goBack()}
			style={{ width: 20, height: 20 }}
		>
			<ArrowBack />
		</Pressable>
	);
};

export default GoBack;
