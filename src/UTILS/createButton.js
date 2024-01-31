import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "../THEME";
const CreateButton = ({ text, isLogged = true }) => {
	return (
		<View style={[styles.pressable, { opacity: isLogged ? 1 : 0.7 }]}>
			<Text style={styles.pressableText}>{text}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	pressable: {
		paddingVertical: 15,
		width: "100%",
		backgroundColor: THEME.colors.green,
		borderRadius: 3,
	},
	pressableText: {
		color: "#fff",
		fontSize: 16,
		fontFamily: THEME.font.InterMedium,
		textAlign: "center",
	},
});
export default CreateButton;
