import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

import IconArrowCart from "assets/svg/iconArrowCart";
import { VisibleImage } from "src/UTILS";
import IncludedServicesCart from "src/components/screen-cart-components/included-services-cart";
const ItemCartVisible = ({
	choice,
	titleCategory,
	showServices,
	setShowServices,
	fetchChangeChoice,
	itemCart,
}) => {
	const { image_product, products, total_price } = itemCart;
	const {
		id,
		title,
		date,
		people = null,
		berth = null,
		productList = [],
		category = null,
	} = products;
	let period = date;
	let countPerson = people ? people : berth;
	if (Array.isArray(date)) {
		period = `${date[0]} - ${date[1]}`;
	}
	return (
		<View style={styles.wrapItemCart}>
			<Text
				style={[
					styles.itemCartHeadText,
					{ width: Dimensions.get("window").width / 2.25 },
				]}
			>
				{titleCategory}
			</Text>

			<View
				style={[
					styles.bodyItemCart,
					{ backgroundColor: choice > -1 ? "#E7F5FF" : "#fff" },
				]}
			>
				<Pressable
					style={styles.itemCart}
					onPress={() => setShowServices((prev) => !prev)}
					onLongPress={() => {
						fetchChangeChoice(itemCart);
					}}
				>
					<View style={styles.itemColumnImage}>
						<VisibleImage style={styles.imageCart} source={image_product} />
					</View>
					<View style={styles.itemColumnInfo}>
						<View style={styles.infoCartHead}>
							<Text style={styles.cartTitle}>{title}</Text>

							<Text style={styles.cartDescr}>
								{category && category} {`(${countPerson} чел.)`}
							</Text>
						</View>
						<View style={styles.infoCartBottom}>
							<Text style={styles.cartDate}>{period}</Text>
						</View>
					</View>
					<View style={styles.itemColumnPrice}>
						<Text style={styles.cartPrice}>{total_price}р</Text>
					</View>
				</Pressable>
				{productList.length > 0 && (
					<View style={styles.cartIncludeServices}>
						<Pressable>
							<View style={styles.wrapArrow}>
								<IconArrowCart
									style={{
										transform: [{ rotate: showServices ? "180deg" : "0deg" }],
									}}
								/>
							</View>
						</Pressable>
						<View style={{ position: "relative", zIndex: 1 }}>
							<IncludedServicesCart
								showServices={showServices}
								services={productList}
							/>
						</View>
					</View>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapItemCart: {
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#D9D9D9",
		overflow: "hidden",
	},

	itemCartHeadText: {
		marginHorizontal: THEME.paddingHorizontal,
		width: 155,
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: THEME.colors.title,
		borderBottomColor: THEME.colors.title,
		borderBottomWidth: 1,
	},
	bodyItemCart: { marginTop: 5, paddingTop: 10, paddingBottom: 10 },
	itemCart: {
		flexDirection: "row",
		paddingHorizontal: THEME.paddingHorizontal,
		// justifyContent: "space-between",
	},
	itemColumnImage: {},
	imageCart: {
		width: 98,
		height: 78,
	},
	itemColumnInfo: {
		marginLeft: 15,
		width: 155,
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	cartTitle: {
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
		color: THEME.colors.defaultText,
	},
	cartDescr: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 10,
		color: "#A8A8A8",
	},
	cartDate: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 12,
		color: THEME.colors.defaultText,
	},
	itemColumnPrice: {
		flex: 1,

		flexDirection: "row",
		justifyContent: "flex-end",

		alignSelf: "center",
	},
	cartPrice: {
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: THEME.colors.title,
	},
	cartIncludeServices: { paddingHorizontal: THEME.paddingHorizontal },
	wrapArrow: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
});
export default ItemCartVisible;
