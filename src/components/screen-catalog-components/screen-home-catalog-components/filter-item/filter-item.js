import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconCheckMark from "assets/svg/iconCheckMark";
import THEME from "src/THEME";
const FilterItem = ({ rowTitle }) => {
	const [check, setCheck] = useState(false);
	const visible = check ? <IconCheckMark /> : null;
	return (
		<Pressable
			style={styles.rowFilter}
			onPress={() => setCheck((prev) => !prev)}
		>
			<View
				style={[
					styles.checkBox,
					{ borderColor: check ? "#51D3B7" : "#D6D6D6" },
				]}
			>
				{visible}
			</View>
			<Text style={[styles.title, { fontSize: check ? 15 : 14 }]}>
				{rowTitle}
			</Text>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	rowFilter: {
		marginTop: 3,
		flexDirection: "row",
		alignItems: "center",
	},
	checkBox: {
		width: 22,
		height: 22,
		borderWidth: 1,
		marginRight: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
	},
});
export default FilterItem;
