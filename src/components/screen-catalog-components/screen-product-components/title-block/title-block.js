import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
const TitleBlock = ({ title }) => {
	return (
		<View style={styles.wrapBlockTitle}>
			<Text style={styles.blockTitle}>{title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapBlockTitle: {
		flexDirection: "row",
	},
	blockTitle: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.title,
		fontSize: 16,

		borderBottomColor: THEME.colors.title,
		borderBottomWidth: 1,
	},
});
export default TitleBlock;
