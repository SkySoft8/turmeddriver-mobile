import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderCatalog from "src/components/header-components/header-catalog";

import BookingBlock from "src/components/screen-catalog-components/screen-booking-product-components/booking-block";
import { NavigationContext } from "src/context/navigation-context";
const BookingModal = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<HeaderCatalog goBack={true} filter={false} navigation={navigation} />
			<NavigationContext.Provider value={navigation}>
				<BookingBlock bookingData={route.params} />
			</NavigationContext.Provider>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default BookingModal;
