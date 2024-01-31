import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import OrderItem from "../order-item";
import { fetchPaymentsData } from "src/redux/fetch/fetchPayment";
import { connect } from "react-redux";
import LoadingSpinner from "src/components/loading-spinner";

const PromoCodesOrderList = ({
	getPayments,
	paymentsList,
	loading,
	activeUser,
}) => {
	const [state, setState] = useState(0);

	// useEffect(() => {

	// 	getPayments(activeUser.id);
	// }, []);
	useEffect(() => {
		getPayments(activeUser.id);
	}, [state]);
	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<View style={styles.wrapOrderList}>
				{paymentsList.length > 0 &&
					paymentsList.map((order, ind) => {
						return (
							<View key={order.id} style={{ paddingTop: ind == 0 ? 0 : 25 }}>
								<OrderItem order={order} />
							</View>
						);
					})}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		marginTop: 30,
	},
});
const mapStateToProps = ({ paymentsData, usersData }) => {
	const { activeUser } = usersData;
	const { paymentsList, loading } = paymentsData;
	return { paymentsList, loading, activeUser };
};
const mapDispatchToProps = (dispatch) => {
	return {
		getPayments: (userId) => dispatch(fetchPaymentsData(userId)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PromoCodesOrderList);
