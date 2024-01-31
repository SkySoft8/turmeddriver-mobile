import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ListCart from "./../list-cart/list-cart";
import TotalCart from "../total-cart";
import { connect } from "react-redux";
import { fetchGetCart } from "src/redux/fetch/fetchCart";
import EmptyCart from "src/components/screen-cart-components/empty-cart";
import LoadingSpinner from "src/components/loading-spinner";

const BlockCart = ({
	navigation,
	cartDataList,
	cartTotal,
	cartTotalPay,
	loading,
	activeUser,
	getCart,
}) => {
	if (!activeUser) {
		return <EmptyCart navigation={navigation} />;
	}

	useEffect(() => {
		getCart(activeUser.id);
	}, []);

	if (loading) {
		return <LoadingSpinner />;
	}
	if (cartDataList.length == 0) {
		return <EmptyCart navigation={navigation} />;
	}
	return (
		<View style={styles.container}>
			<ListCart
				cartDataList={cartDataList}
				activeUserId={activeUser.id}
				navigation={navigation}
			/>
			<TotalCart
				cartTotal={cartTotal}
				cartTotalPay={cartTotalPay}
				activeUser={activeUser}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 50,
	},
});

const mapStateToProps = ({ cartData, usersData }) => {
	const { cartDataList, cartTotal, cartTotalPay, loading } = cartData;
	const { activeUser } = usersData;
	return { cartDataList, cartTotal, cartTotalPay, loading, activeUser };
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCart: (userId) => dispatch(fetchGetCart(userId)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(BlockCart);
