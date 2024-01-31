import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BlockCart from "src/components/screen-cart-components/block-cart";
import HeaderCart from "src/components/header-components/header-cart";

const CartScreen = ({ navigation }) => {
	const auth = {
		userName: "",
		password: "",
		currency: "RUB",
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<HeaderCart goBack={true} title={"Корзина"} navigation={navigation} />
			<BlockCart navigation={navigation} />
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default CartScreen;
