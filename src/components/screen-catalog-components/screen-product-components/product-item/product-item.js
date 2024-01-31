import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import SliderImages from "../slider-images";
import GeneralInformation from "../general-information";
import AddToCartServices from "../add_to_cart-services";
import Preferences from "../preferences";
import ServicesAndAmenities from "../services_and_amenities";
import GetRooms from "../rooms";
import PriceServices from "../price-services";
import GetCommentList from "../comments";
import CreateComment from "../create-comment";
import ProductMap from "../product-map";
import { filterData, filterItemCategory } from "src/UTILS/filterDataServices";
const ProductItem = ({ productData, productsType }) => {
	const {
		id,
		user_id,
		image_url,
		images,
		title,
		content,
		address,
		phone,
		coordinate_l,
		coordinate_r,
	} = productData.productItem;

	let bookingAddServices = null;
	//create array with certain category
	const arrayCartCategory = filterData(productData.cartCategory, user_id);
	const arrayPreferences = filterData(productData.preferences, user_id);
	const arrayServicesAndAmenities = filterData(productData.services, user_id);
	const typeItemCategory = () => {
		if (productsType.keyItem === "medicals") return "medical_todo_list_id";
		else return `${productsType.keyItem}_todo_list_id`;
	};
	//create array with certain items category
	const cartItemCategory = useCallback(() => {
		return filterItemCategory(
			arrayCartCategory,
			productData.cartItemCategory,
			typeItemCategory()
		);
	}, []);

	if (arrayCartCategory.length > 0) {
		bookingAddServices = {
			cartCategory: arrayCartCategory,
			cartItemCategory: cartItemCategory(),
		};
	}

	return (
		<View style={styles.container}>
			<SliderImages mainImage={image_url} imagesData={images} title={title} />
			{!productsType.rooms && (
				<AddToCartServices bookingAddServices={bookingAddServices} />
			)}

			<GeneralInformation content={content} address={address} phone={phone} />
			{arrayPreferences.length > 0 && (
				<Preferences preferences={arrayPreferences} />
			)}
			{arrayServicesAndAmenities.length > 0 && (
				<ServicesAndAmenities services={arrayServicesAndAmenities} />
			)}
			{productsType.rooms && (
				<GetRooms
					titleRooms={"Номера"}
					user_id={user_id}
					bookingAddServices={bookingAddServices}
				/>
			)}

			{arrayCartCategory.length > 0 && (
				<PriceServices
					title={"Услуги"}
					cartCategory={arrayCartCategory}
					cartItemCategory={cartItemCategory()}
				/>
			)}
			<GetCommentList id={id} />
			<CreateComment id={id} />
			<ProductMap latitude={coordinate_l} longitude={coordinate_r} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default ProductItem;
