import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import THEME from "src/THEME";
import { CreateButton } from "src/UTILS";
import { fetchCartPayment } from "src/redux/fetch/fetchPayment";

import { connect } from "react-redux";
import LoadingSpinner from "src/components/loading-spinner";
const TotalCart = ({
	cartTotal,
	cartTotalPay,
	activeUser,
	toCartData,
	cartPayment,
	loading,
	error,
}) => {
	if (loading) {
		return <LoadingSpinner />;
	} else {
		const redirectToBank = async () => {
			await cartPayment(activeUser.id).then((el) => {
				if (el.payload.formUrl && !error) {
					Linking.openURL(`${el.payload.formUrl}`);
				}
			});
		};
		return (
			<View style={styles.container}>
				{error && <Text style={{ textAlign: "center" }}>Ошибка...</Text>}
				<View style={styles.boxShadow} />
				<View style={styles.wrapTotal}>
					<View style={[styles.rowTotal, { marginTop: 0 }]}>
						<View>
							<Text style={styles.totalTitle}>Общая сумма заказа:</Text>
							<Text style={styles.totalDescr}>(оплата на месте)</Text>
						</View>
						<View>
							<Text style={styles.totalCount}>{cartTotal}р</Text>
						</View>
					</View>
					<View style={styles.rowTotal}>
						<View>
							<Text style={styles.totalTitle}>К оплате платформе (10%):</Text>
							<Text style={styles.totalDescr}>(оплата сейчас)</Text>
						</View>
						<View>
							<Text style={styles.totalCount}>{cartTotalPay}р</Text>
						</View>
					</View>

					<Pressable style={styles.totalBtn} onPress={() => redirectToBank()}>
						<CreateButton text={"Оплатить 10%"} />
					</Pressable>
				</View>
			</View>
		);
	}
	// console.log(toCartData);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
	},
	boxShadow: {
		width: "100%",
		height: 1,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 1,
	},
	wrapTotal: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	rowTotal: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	totalTitle: {
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	totalDescr: {
		fontFamily: THEME.font.InterMedium,
		color: "#A8A8A8",
		fontSize: 12,
		marginTop: 4,
	},
	totalCount: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	totalBtn: {
		marginTop: 15,
	},
});

const mapStateToProps = ({ paymentsData }) => {
	const { toCartData, loading, error } = paymentsData;

	return { toCartData, loading, error };
};
const mapDispatchToProps = (dispatch) => {
	return {
		cartPayment: (user_id) => dispatch(fetchCartPayment(user_id)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TotalCart);
