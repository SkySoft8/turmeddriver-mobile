import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
const Pagination = () => {
	const [active, setActive] = useState(0);
	const data = [0, 1, 2, 3];
	return (
		<View style={styles.container}>
			<View style={styles.blockPag}>
				{data.map((el, ind) => {
					return (
						<Text
							key={ind}
							onPress={() => setActive(el)}
							style={[styles.itemPag, active == el ? styles.itemPagActive : ""]}
						>
							{ind + 1}
						</Text>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 10,
	},
	blockPag: {
		flexDirection: "row",
	},
	itemPag: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderWidth: 1,
		borderColor: "transparent",
		color: THEME.colors.title,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
	itemPagActive: {
		borderColor: THEME.colors.green,
	},
});
export default Pagination;
