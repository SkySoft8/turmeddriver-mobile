import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import IconArrowCart from "assets/svg/iconArrowCart";
import IncludedServices from "../included-services";
import THEME from "src/THEME";
const OrderItemContentVisible = ({
	changeShowServices,
	showServices,
	order,
	category,
	productsInfo,
	getDate,
	promocode,
}) => {
	const {
		id,

		role,
		name_product,
		total_price,
		date,
		created_at,
		updated_at,
		products,
	} = order;

	return (
		<>
			<Text style={styles.itemOrderHeadText}>{category}</Text>
			<View style={styles.wrapItemOrder}>
				<View style={styles.itemOrder}>
					<Pressable
						style={styles.itemOrderPress}
						onPress={() => changeShowServices(!showServices)}
					>
						<View style={styles.itemColumnInfo}>
							<Text style={styles.orderTitle}>{name_product}</Text>
							<Text style={styles.orderDescr}>
								({productsInfo.people || productsInfo.berth} чел)
							</Text>
							<Text style={styles.orderPeriod}>
								{getDate(date).dateStart}
								{getDate(date).dateEnd && `- ${getDate(date).dateEnd}`}
							</Text>
						</View>
						<View style={styles.itemColumnPrice}>
							<Text style={styles.orderPrice}>{total_price}р</Text>
						</View>
						<View style={styles.itemColumnPromoCode}>
							<Text style={styles.orderPromoCodeTitle}>Промокод</Text>
							<Text style={styles.orderPromoCode} numberOfLines={1}>
								{promocode ? promocode : "В обработке"}
							</Text>
						</View>
					</Pressable>
				</View>
				<View>
					{productsInfo.productList && productsInfo.productList.length > 0 ? (
						<>
							<Pressable
								style={styles.blockArrow}
								onPress={() => changeShowServices(!showServices)}
							>
								<IconArrowCart
									style={{
										transform: [{ rotate: showServices ? "180deg" : "0deg" }],
									}}
								/>
							</Pressable>
							<IncludedServices
								showServices={showServices}
								services={productsInfo.productList}
							/>
						</>
					) : (
						<View />
					)}
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	itemOrderHeadText: {
		width: Dimensions.get("window").width / 2.55,
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: THEME.colors.title,
		borderBottomColor: THEME.colors.title,
		borderBottomWidth: 1,
	},
	wrapItemOrder: {
		overflow: "hidden",
		marginTop: 10,
	},
	itemOrderPress: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	itemColumnInfo: {
		width: "100%",
		maxWidth: 145,
	},
	orderTitle: {
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
		color: THEME.colors.defaultText,
	},
	orderDescr: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 10,
		color: "#A8A8A8",
	},
	orderPeriod: {
		marginTop: 10,
		fontFamily: THEME.font.InterMedium,
		fontSize: 12,
		color: THEME.colors.defaultText,
	},
	itemColumnPrice: {
		justifyContent: "center",
		width: "20%",
		alignItems: "flex-start",
	},
	orderPrice: {
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: THEME.colors.title,
	},
	orderPromoCodeTitle: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 12,
		color: THEME.colors.defaultText,
	},
	itemColumnPromoCode: {
		flex: 0.7,

		justifyContent: "center",
		alignItems: "center",
	},
	orderPromoCode: {
		marginTop: 4,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
		color: THEME.colors.green,
	},

	blockArrow: {
		flexDirection: "row",
		justifyContent: "center",
	},
});
export default OrderItemContentVisible;
