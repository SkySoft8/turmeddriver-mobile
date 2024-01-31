import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import LoadingSpinner from "src/components/loading-spinner";
import AddToCart from "../add-to-cart";
import BookingItems from "./../booking-items";
import { connect } from "react-redux";
import { fetchAddToCart, fetchGetCart } from "src/redux/fetch/fetchCart";
const BookingBlock = ({
	bookingData,
	productsType,
	productItem,
	fetchAddToCart,
	getCart,
	activeUser,
	loading,
}) => {
	const [total, setTotal] = useState(
		bookingData.roomData ? Number(bookingData.roomData.price) : 0
	);
	const changeTotal = (price) => {
		setTotal((prev) => prev + Number(price));
	};

	const product = useRef(null);

	const createArrayServices = (services) => {
		//array for product list
		let newServices = [];
		if (!services) return newServices;
		services.map((serv) => {
			newServices.push({
				id: serv.id,
				qty: serv.count,
				price: serv.price,
				product: serv.title,
			});
		});
		return newServices;
	};

	//for type products Cafe,Spa,Medical
	const createProductListType_1 = ({
		period,
		productInfo,
		countPerson,
		services,
	}) => {
		const periodDate = `${period.periodStart.visible}`; //may be will have time

		return {
			date: periodDate,
			people: countPerson,
			title: productInfo.title,
			// product: createArrayServices(services),
			product: null,
			totalPrice: total,
			productList: createArrayServices(services),
		};
	};

	//for type products hotel
	const createProductListType_2 = ({
		period,
		productInfo,
		countPerson,
		services,
	}) => {
		const periodDate =
			period.periodEnd.visible.length > 0
				? [period.periodStart.visible, period.periodEnd.visible]
				: [period.periodStart.visible, period.periodStart.visible];

		return {
			id: productInfo.id,
			date: periodDate,
			berth: countPerson,
			price: total,
			title: productInfo.title,
			category: productInfo.category,
		};
	};

	//for type products sanatorium, sport
	const createProductListType_3 = ({
		period,
		productInfo,
		countPerson,
		services,
	}) => {
		const periodDate =
			period.periodEnd.visible.length > 0
				? [period.periodStart.visible, period.periodEnd.visible]
				: [period.periodStart.visible, period.periodStart.visible];
		return {
			id: productInfo.id,
			date: periodDate,
			berth: countPerson,
			title: productInfo.title,
			product: null,
			category: productInfo.category,
			totalPrice: total,
			productList: createArrayServices(services),
		};
	};

	//for type products tur
	const createProductListType_4 = ({
		period,
		productInfo,
		countPerson,
		services,
	}) => {
		const periodDate =
			period.periodEnd.visible.length > 0
				? `${period.periodStart.visible} - ${period.periodEnd.visible}`
				: `${period.periodStart.visible} - ${period.periodStart.visible}`;
		return {
			id: productInfo.id,
			date: periodDate,
			berth: countPerson,
			price: total,
			title: productInfo.title,
			category: productInfo.category,
		};
	};

	const createSentObject = () => {
		const { period, productInfo } = product.current.setObjectToCart();

		if (!period || total < 1) return null;

		const preOrderDate = period
			? period.periodEnd.visible.length > 0
				? "-"
				: period.periodStart.visible
			: null;
		//multiply total on count day
		const orderTotal = period.countDay
			? period.countDay * Number(bookingData.roomData.price) +
			  total -
			  Number(bookingData.roomData.price)
			: total;

		let productsObject;
		if (
			productsType.keyItem == "cafe" ||
			productsType.keyItem == "spa" ||
			productsType.keyItem == "medicals"
		) {
			productsObject = createProductListType_1(
				product.current.setObjectToCart()
			);
		}
		if (productsType.keyItem == "hostel") {
			productsObject = createProductListType_2(
				product.current.setObjectToCart()
			);
		}
		if (
			productsType.keyItem == "sanatorium" ||
			productsType.keyItem == "sport"
		) {
			productsObject = createProductListType_3(
				product.current.setObjectToCart()
			);
		}
		if (productsType.keyItem == "tur") {
			productsObject = createProductListType_4(
				product.current.setObjectToCart()
			);
		}

		//create object with recieved data from fields
		return {
			total_price: orderTotal,
			user_id: activeUser.id,
			date: preOrderDate,
			name_product: productInfo.title,
			image_product: productInfo.image,
			role: productsType.role,
			organization_email: productItem.email,
			products: productsObject,
		};
	};
	//cafe=spa=med
	const sendBookingToCart = async () => {
		if (createSentObject()) {
			await fetchAddToCart(createSentObject()).then(() =>
				getCart(activeUser.id)
			);

			return true;
		}
		return false;
	};

	return (
		<View style={styles.container}>
			<BookingItems
				ref={product}
				bookingData={bookingData}
				productItem={productItem}
				changeTotal={changeTotal}
				productsType={productsType}
			/>
			{loading && <LoadingSpinner />}
			<AddToCart total={total} sendBookingToCart={sendBookingToCart} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		marginTop: 15,
		marginBottom: 50,
	},
});
const mapStateToProps = ({ productsData, cartData, usersData }) => {
	const { productsType, productItem } = productsData;
	const { activeUser } = usersData;
	const { loading } = cartData;
	return { productsType, productItem, loading, activeUser };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAddToCart: (product) => dispatch(fetchAddToCart(product)),
		getCart: (userId) => dispatch(fetchGetCart(userId)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingBlock);
