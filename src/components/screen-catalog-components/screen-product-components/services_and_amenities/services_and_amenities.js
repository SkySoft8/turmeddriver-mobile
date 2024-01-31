import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import THEME from "src/THEME";
import { SliceArray } from "src/UTILS";

import TitleBlock from "../title-block/title-block";
const ServicesAndAmenities = ({ services }) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockServices}>
				<TitleBlock title={"Услуги и удобств"} />

				<View style={styles.blockList}>
					<SliceArray data={services} />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		marginTop: 25,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	blockTitle: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.title,
		fontSize: 16,

		borderBottomColor: THEME.colors.title,
		borderBottomWidth: 1,
	},
	blockServices: {},
	blockList: {
		justifyContent: "space-between",
		marginTop: 15,

		flexDirection: "row",
	},
});
export default ServicesAndAmenities;
