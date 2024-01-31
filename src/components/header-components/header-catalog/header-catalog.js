import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	Animated,
	Dimensions,
} from "react-native";

import THEME from "src/THEME";

import GoBack from "src/components/header-components/go-back";
import SearchBar from "src/components/header-components/searchbar";
import Filter from "src/components/header-components/filter";
const HeaderCatalog = ({ title = "Каталог", goBack, filter, navigation }) => {
	const compGoBack = goBack ? (
		<GoBack navigation={navigation} />
	) : (
		<Image
			style={styles.logo}
			source={require("../../../../assets/images/iconApp.png")}
		/>
	);
	// const compFilter = filter && (
	// 	<Filter showFilter={showFilter} changeVisibleFilter={changeVisibleFilter} />
	// );
	// const showSearchBar = useRef(null);
	return (
		<View style={styles.container}>
			<View>{compGoBack}</View>

			<View style={styles.title}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			{filter ? <SearchBar /> : <View />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginHorizontal: THEME.paddingHorizontal,
		// backgroundColor: "blue",
		position: "relative",
		overflow: "hidden",
	},
	logo: { width: 30, height: 30, objectFit: "contain" },
	title: {},
	titleText: {
		fontFamily: THEME.font.InterBold,
		fontSize: 18,
		color: "#505050",
	},
});
export default HeaderCatalog;
