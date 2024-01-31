import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ItemCart from "../item-cart";

const ListCart = ({ cartDataList }) => {
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.wrapCartList}>
				{cartDataList.map((item, ind) => {
					return (
						<View
							key={`${item.id}${ind}`}
							style={{ marginTop: ind == 0 ? 0 : 20 }}
						>
							<ItemCart itemCart={item} />
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		alignContent: "center",
	},
	wrapCartList: {},
});
export default ListCart;
