import React from "react";
import { View, StyleSheet } from "react-native";

import THEME from "src/THEME";
import { SliceArray } from "src/UTILS";

import TitleBlock from "../title-block/title-block";
const Preferences = ({ preferences }) => {
	return (
		<View style={styles.container}>
			<TitleBlock title={"Преференции для клиентов платформы"} />

			<View style={styles.blockList}>
				<SliceArray data={preferences} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		marginTop: 25,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	wrapBlockTitle: {
		flexDirection: "row",
	},
	blockList: {
		justifyContent: "space-between",
		marginTop: 15,

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
export default Preferences;
