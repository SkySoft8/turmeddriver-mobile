import React from "react";

import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	Linking,
	Dimensions,
} from "react-native";

import { SliceArray, VisibleImage } from "src/UTILS";
import THEME from "src/THEME";

const ProductList = ({
	navigation,
	productsDataList,
	fetchItemProductById,
	productsType,
}) => {
	if (productsDataList.length == 0) {
		return (
			<Text
				style={{
					textAlign: "center",
					marginTop: "10%",
					fontFamily: THEME.font.InterMedium,
					color: THEME.colors.defaultText,
					fontSize: 24,
				}}
			>
				Не найдено!
			</Text>
		);
	}
	return (
		<View style={styles.container}>
			{productsDataList.map((item) => {
				return (
					<View style={styles.wrapItem} key={item.id}>
						<View style={styles.wrapImage}>
							<Pressable
								onPress={() => {
									fetchItemProductById(item.id, productsType.keyItem);
									navigation.navigate("Card", {
										id: item.id,
									});
								}}
							>
								<VisibleImage style={styles.Image} source={item.image_url} />
							</Pressable>
						</View>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.type}>{item.title}</Text>
						<View style={styles.packList}>
							<SliceArray data={item.tags} />
						</View>

						<View style={styles.itemLinkWrap}>
							<Pressable
								style={styles.itemLinkBtn}
								onPress={() => Linking.openURL(item.link)}
							>
								<Image
									style={styles.itemLinkImage}
									source={{ uri: item.logo_url }}
								/>
								<Text style={styles.itemLinkText}>{item.name_link}</Text>
							</Pressable>
						</View>
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 10,

		paddingHorizontal: THEME.paddingHorizontal,
	},
	wrapItem: {
		marginBottom: 20,
	},
	Image: {
		borderRadius: 3,
		width: "100%",
		height: (Dimensions.get("screen").width * 0.95) / 1.6,
		objectFit: "cover",
		// height: "100%",
	},
	title: {
		marginTop: 12,
		color: THEME.colors.title,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
	type: {
		marginTop: 2,
		color: THEME.colors.defaultText,
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
	},
	packList: {
		marginTop: 10,
		justifyContent: "space-between",

		flexDirection: "row",
	},
	packItem: {
		marginTop: 3,
		flexDirection: "row",
		alignItems: "center",
		width: "50%",
	},
	packListText: {
		marginLeft: 3,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		width: "90%",
	},
	itemLinkWrap: {
		marginTop: 10,
	},
	itemLinkBtn: {
		flexDirection: "row",
		alignItems: "center",
	},
	itemLinkImage: {
		width: 24,
		height: 24,
		borderRadius: 50,
	},
	itemLinkText: {
		marginLeft: 8,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
	},
});
export default ProductList;
