import React from "react";

import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
import OrderItemContent from "../order-item-content";
import { viewDate, viewTime } from "src/UTILS";
const OrderItem = ({ order }) => {
	const { orderId: orderNumber, products, promocode } = order;

	const date = new Date(products[0].created_at);
	return (
		<View style={styles.wrapOrder}>
			<View style={styles.orderHeader}>
				<Text style={styles.numOrder}>Заказ #{orderNumber}</Text>
				<Text style={styles.dateOrder}>
					{`(${viewTime(date)} ${viewDate(0, 0, 0, date)})`}
				</Text>
			</View>
			<View>
				{products.map((item, index) => {
					return (
						<View
							key={item.id}
							style={{
								backgroundColor: "#fff",
								marginTop: index == 0 ? 20 : 15,
							}}
						>
							<OrderItemContent item={item} promocode={promocode} />
						</View>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapOrder: {
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#D9D9D9",
	},
	orderHeader: {
		flexDirection: "row",
		alignItems: "center",
	},
	numOrder: {
		marginRight: 8,
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: "#A8A8A8",
	},
	dateOrder: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 12,
		color: "#A8A8A8",
	},
});
export default OrderItem;
