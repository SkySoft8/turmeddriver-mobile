import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

import THEME from "src/THEME";

const CategorySlider = ({ defaultProductsTypes, changeType, productsType }) => {
	return (
		<View style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				style={styles.catList}
				data={defaultProductsTypes}
				renderItem={({ item }) => (
					<View
						style={[
							styles.wrapCat,
							item.key == productsType.key ? styles.wrapCatActive : "",
						]}
					>
						<Pressable
							onPress={() => {
								//change type for api
								changeType(item);
							}}
						>
							<Text
								style={[
									styles.catText,
									item.id == productsType.id ? styles.cartTextActive : "",
								]}
							>
								{item.title}
							</Text>
						</Pressable>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		paddingLeft: THEME.paddingHorizontal,
	},
	catList: {},
	wrapCat: {
		// width: "30%",
		// flexBasis: 30,
		alignItems: "center",

		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderBottomWidth: 2,
		borderBottomColor: THEME.colors.title,
	},
	catText: {
		// width: `${(120 * Dimensions.get("window").width) / 100}%`,
		maxWidth: 150,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.title,
		fontSize: 16,
	},
	wrapCatActive: {
		backgroundColor: THEME.colors.title,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	cartTextActive: {
		color: "#fff",
	},
});
export default CategorySlider;
