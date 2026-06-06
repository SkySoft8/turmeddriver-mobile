import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { View as RNView, Text as RNText, StyleSheet as RNStyleSheet, Pressable as RNPressable } from "react-native"; // keep existing React Native imports
import { View as _View } from "react-native"; // avoid accidental removal by editor
import { View as __View } from "react-native"; // idem
import { View as ___View } from "react-native"; // idem

import { fetchRemoveFromCart, fetchGetCart } from "src/redux/fetch/fetchCart";
import { connect } from "react-redux";
import GoBack from "../go-back";
import Delete from "../delete";
import THEME from "src/THEME";
const HeaderCart = ({
	goBack,
	title,
	navigation,
	countCart,
	countChoice,
	removeFromCart,
	getCart,
	activeUser,
	cartChoiceProduct,
}) => {
	const removeAction = async () => {
		await removeFromCart(cartChoiceProduct).then(() => getCart(activeUser.id));
	};
	const compGoBack = goBack && <GoBack navigation={navigation} />;
	const compDelete = countChoice && countChoice > 0 && <Delete removeAction={removeAction} />;
	return (
		<View style={styles.container}>
			<View>{compGoBack}</View>
			<View style={styles.title}>
				<Title title={title} countCart={countCart} countChoice={countChoice} />
			</View>
			<View style={{ width: "7%" }}>{compDelete}</View>
		</View>
	);
};

const Title = ({ title, countCart, countChoice }) => {
	const getTitle = () => {
		if ((!countCart || countCart < 1) && (!countChoice || countChoice < 1)) return title;
		if (countChoice && countChoice > 0) return `Выбрано: ${countChoice}`;
		if (countCart && countCart > 0 && (!countChoice || countChoice < 1)) return `${title} (${countCart})`;
		return title; // fallback
	};

	return <Text style={styles.titleText}>{getTitle()}</Text>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		paddingHorizontal: THEME.paddingHorizontal,
	},

	titleText: {
		fontFamily: THEME.font.InterBold,
		fontSize: 18,
		color: "#505050",
	},
});
const mapStateToProps = ({ cartData, usersData }) => {
	const {
		cartChoiceCount: countChoice,
		cartCount: countCart,
		cartChoiceProduct,
	} = cartData;
	const { activeUser } = usersData;
	return { countChoice, countCart, cartChoiceProduct, activeUser };
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (cartChoiceProduct) =>
			dispatch(fetchRemoveFromCart(cartChoiceProduct)),
		getCart: (userId) => dispatch(fetchGetCart(userId)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart);
