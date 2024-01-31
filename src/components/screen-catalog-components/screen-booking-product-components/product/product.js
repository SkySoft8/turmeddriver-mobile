import React, { useState, useImperativeHandle, forwardRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import THEME from "src/THEME";
import { VisibleImage } from "src/UTILS";
import { Dimensions } from "react-native";
const Product = ({ roomData, productItem, productsType }, ref) => {
	let initialState = {};
	let preview_image;
	const { keyItem } = productsType;
	//if have room data, then get preview image from array roomData
	if (roomData != null) {
		const { id, title, price, category } = roomData;
		for (key in roomData) {
			if (key.indexOf("preview_image") > 1) preview_image = roomData[key];
		}
		//and create init state
		initialState = { id, title, category, price, image: preview_image };
	} else {
		//else, get preview image from array productItem
		const { id, title, price = null, image_url } = productItem;
		//and create init state
		initialState = { id, title, category: null, price, image: image_url };
	}
	const [product, setProduct] = useState(initialState);
	const returnProductState = () => product;
	useImperativeHandle(ref, () => ({ returnProductState }));
	return (
		<View style={styles.bookingProduct}>
			<Text style={styles.title}>Бронь</Text>
			<View style={styles.productRow}>
				<View style={styles.columnImg}>
					<VisibleImage style={styles.productImg} source={product.image} />

					<Text style={styles.productDescr}>{product.title}</Text>
				</View>
				{product.price && (
					<View style={styles.columnPrice}>
						<Text style={styles.productPrice}>{product.price}р</Text>
						{keyItem == "sanatorium" ||
						keyItem == "hostel" ||
						keyItem == "sport" ? (
							<Text style={styles.productPriceDescr}>(за сутки)</Text>
						) : null}
					</View>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	bookingProduct: {
		marginTop: 20,
	},
	title: {
		fontSize: 14,
		color: THEME.colors.title,
		fontFamily: THEME.font.InterBold,
	},
	productRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	columnImg: {
		flexDirection: "row",

		alignItems: "center",
		width: "65%",
	},
	productImg: {
		borderRadius: 3,
		marginTop: 5,
		width: Dimensions.get("window").width / 5,
		height: Dimensions.get("window").width / 5 / 1.55,
	},
	productDescr: {
		verticalAlign: "middle",
		marginLeft: 20,
		fontSize: 14,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
	},
	columnPrice: {
		width: "22%",

		alignItems: "center",
	},
	productPrice: {
		fontSize: 14,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterBold,
	},
	productPriceDescr: {
		fontSize: 12,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
	},
});
export default forwardRef(Product);
