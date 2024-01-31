import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import CheckMark from "../../assets/svg/checkmark";

const SliceArray = ({ data }) => {
	const sliceArray = (array) => {
		let newArray = [[], []];
		array.map((el, index) => {
			if (Math.ceil(array.length / 2) > index) newArray[0].push(el);
			else newArray[1].push(el);
		});
		return newArray;
	};

	return (
		<>
			{sliceArray(data).map((column, index) => {
				return (
					<View key={index} style={styles.columnList}>
						{column.map((item) => {
							return (
								<View
									key={item.id}
									style={[
										styles.item,
										{
											justifyContent: index == 0 ? "flex-start" : "flex-start",
										},
									]}
								>
									<View style={styles.itemIconWrap}>
										<CheckMark style={styles.itemIcon} />
									</View>
									<Text style={styles.itemText}>{item.title}</Text>
								</View>
							);
						})}
					</View>
				);
			})}
		</>
	);
};
const styles = StyleSheet.create({
	columnList: {
		width: "50%",
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
	},
	itemIconWrap: {
		marginLeft: 6,
		paddingRight: 12,
	},
	itemIcon: {},
	itemText: {
		flex: 1,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
		flexWrap: "wrap",
	},
});
export default SliceArray;
