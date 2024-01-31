import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import THEME from "src/THEME";
import { VisibleImage } from "src/UTILS";
const SliderImages = ({ mainImage, title, imagesData = [] }) => {
	const [images, setImages] = useState({
		index: 0,
		imagesList: [{ images: mainImage }, ...imagesData],
		activeImage: mainImage,
	});

	return (
		<View style={styles.container}>
			<View style={styles.titleWrap}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			<View style={styles.imagesWrap}>
				<View style={styles.mainImageWrap}>
					<VisibleImage style={styles.mainImage} source={images.activeImage} />
				</View>
				<View style={styles.blockImagesWrap}>
					{images.imagesList.length > 1 &&
						images.imagesList[1] != null &&
						images.imagesList.map((imageItem, index) => {
							return (
								<Pressable
									key={index}
									style={styles.itemImageButton}
									onPress={() =>
										setImages((prev) => ({
											...prev,
											index,
											activeImage: imageItem.images,
										}))
									}
								>
									<Image
										style={[
											styles.itemImage,
											index === images.index
												? styles.itemImageButtonActive
												: "",
										]}
										source={{ uri: imageItem.images }}
									/>
								</Pressable>
							);
						})}
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 20,
	},
	titleText: {
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
		color: THEME.colors.title,
	},
	imagesWrap: {
		marginTop: 12,
	},
	mainImageWrap: {},
	mainImage: {
		width: "100%",
		objectFit: "cover",
		height: 215,
		borderRadius: 3,
	},
	blockImagesWrap: {
		marginTop: 12,
		flexDirection: "row",
	},
	itemImageButton: {
		width: 50,
		height: 50,
		marginRight: 8,
	},
	itemImage: {
		width: "100%",
		height: "100%",
		borderRadius: 3,
		borderWidth: 1,
	},
	itemImageButtonActive: {
		borderColor: THEME.colors.green,
	},
});
export default SliderImages;
