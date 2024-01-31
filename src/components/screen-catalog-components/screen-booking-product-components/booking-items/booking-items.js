import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Period from "../period";
import Product from "../product";
import CountPersons from "../count-persons";
import AdditServices from "../addit-services";
import THEME from "src/THEME";
const BookingItems = (
	{ changeTotal, bookingData, productItem, productsType },
	ref
) => {
	const { bookingAddServices, roomData } = bookingData;
	//get child functions that return their state
	const periodRef = useRef(null);
	const productRef = useRef(null);
	const countPersonRef = useRef(null);
	const additServicesRef = useRef(null);
	const setObjectToCart = () => ({
		period: periodRef.current ? periodRef.current.returnPeriodState() : null,
		productInfo: productRef.current
			? productRef.current.returnProductState()
			: null,
		countPerson: countPersonRef.current
			? countPersonRef.current.returnCountPersonState()
			: roomData.berth
			? roomData.berth
			: null,
		services: additServicesRef.current
			? additServicesRef.current.returnAdditServicesState()
			: null,
	});
	useImperativeHandle(ref, () => ({ setObjectToCart }));

	const title = productItem.title;
	const haveRoomData = roomData ? true : false;

	return (
		<ScrollView style={styles.bookingContent}>
			<Text style={styles.bookingTitle}>{title}</Text>
			<Period
				ref={periodRef}
				haveRoomData={haveRoomData}
				productsType={productsType}
			/>
			<Product
				ref={productRef}
				roomData={roomData}
				productItem={productItem}
				productsType={productsType}
			/>

			{/* because in roomData have count persons on default */}
			{!roomData && <CountPersons ref={countPersonRef} />}
			{bookingAddServices && (
				<AdditServices
					ref={additServicesRef}
					bookingAddServices={bookingAddServices}
					changeTotal={changeTotal}
					productItem={productItem}
					roomData={roomData}
				/>
			)}
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	bookingContent: {
		paddingHorizontal: THEME.paddingHorizontal,
	},
	bookingTitle: {
		fontSize: 16,
		color: THEME.colors.title,
		fontFamily: THEME.font.InterBold,
	},
});
export default forwardRef(BookingItems);
