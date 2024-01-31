import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterItem from "../filter-item";

import THEME from "src/THEME";
const Filter = () => {
	const data = [
		{ id: 0, title: "Страна", key: "country", list: ["Россия", "Беларусь"] },
		{
			id: 1,
			title: "Регион (область)",
			key: "region",
			list: ["Россия", "Беларусь"],
		},
		{ id: 2, title: "Город", key: "city", list: ["Россия", "Беларусь"] },
	];
	return (
		<View style={styles.container}>
			<View style={styles.wrapFilter}>
				{data.map((item, ind) => {
					return (
						<View
							key={item.id}
							style={[styles.sectFilter, { marginTop: ind != 0 ? 20 : 0 }]}
						>
							<Text style={styles.titleFilter}>{item.title}</Text>
							<View style={styles.wrapRowFilter}>
								{item.list.map((filterRow, index) => {
									return <FilterItem key={index} rowTitle={filterRow} />;
								})}
							</View>
						</View>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 13,
	},
	titleFilter: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	wrapRowFilter: {
		marginTop: 10,
	},
});
export default Filter;
