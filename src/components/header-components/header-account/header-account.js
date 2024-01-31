import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
import GoBack from "../go-back";
import Edit from "../edit";
const HeaderAccount = ({
	goBack,
	title,
	activeEdit,
	navigation,
	changeAccessEdit,
	accessEdit,
}) => {
	const compGoBack = goBack && <GoBack navigation={navigation} />;
	const compEdit = activeEdit && (
		<Edit changeAccessEdit={changeAccessEdit} accessEdit={accessEdit} />
	);
	return (
		<View style={styles.container}>
			<View>{compGoBack}</View>
			<View style={styles.title}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			<View style={{ width: "7%" }}>{compEdit}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		paddingHorizontal: THEME.paddingHorizontal,
	},

	titleText: {
		fontFamily: THEME.font.InterBold,
		fontSize: 18,
		color: "#505050",
	},
});
export default HeaderAccount;
