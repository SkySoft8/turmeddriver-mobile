import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import THEME from "src/THEME";
import HeaderCatalog from "./../../components/header-components/header-catalog";
import { CreateButton } from "src/UTILS";
import { fetchRemoveFromCart, fetchGetCart } from "src/redux/fetch/fetchCart";
import { fetchPaymentsData } from "src/redux/fetch/fetchPayment";
import LoadingSpinner from "src/components/loading-spinner";
import axios from "axios";
const SuccessPaymentScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const user = useSelector(({ usersData }) => usersData);
	const cart = useSelector(({ cartData }) => cartData);
	useEffect(() => {
		const settingAfterPayment = async () => {
			await dispatch(fetchRemoveFromCart(cart.cartDataList))
				.then(() => dispatch(fetchGetCart(user.activeUser.id)))
				.then(async () => {
					return await axios.get(
						`https://tourmeddriver.com/api/payment/status/${user.activeUser.id}`
					);
				})
				.then(() => dispatch(fetchPaymentsData(user.activeUser.id)))
				.then(() => {
					setLoading(false);
				});
		};
		settingAfterPayment();
	}, []);
	return (
		<View style={styles.container}>
			{loading ? (
				<LoadingSpinner />
			) : (
				<View style={styles.wrapBlock}>
					<Text style={styles.text}>
						{user.activeUser.name},оплата прошла успешно!
					</Text>
					<Pressable onPress={() => navigation.navigate("Cart")}>
						<CreateButton text={"Вернуться"} />
					</Pressable>
				</View>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
	},
	wrapBlock: {
		width: "80%",
		flex: 0.8,
		alignSelf: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	text: {
		marginBottom: 20,
		textAlign: "center",
		color: THEME.colors.green,
		fontSize: 20,
		fontFamily: THEME.font.InterBold,
	},
});
export default SuccessPaymentScreen;
