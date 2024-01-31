import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CreateButton } from "src/UTILS";
import THEME from "src/THEME";

import { NavigationContext } from "src/context/navigation-context";
const AddToCart = ({ total, sendBookingToCart }) => {
	const [titleBtn, setTitleBtn] = useState({
		text: "Забронировать",
		config: false,
	});
	const cont = useContext(NavigationContext);
	const setCart = () => {
		if (!titleBtn.config) {
			sendBookingToCart().then((answer) => {
				if (answer) {
					setTitleBtn({ text: "Забронировано!", config: true });
					setTimeout(() => {
						cont.goBack();
					}, 2500);
				}
			});
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.boxShadow} />
			<View style={styles.wrapTotal}>
				<View style={[styles.rowTotal, { marginTop: 0 }]}>
					<View>
						<Text style={styles.totalTitle}>Общая сумма заказа:</Text>
						<Text style={styles.totalDescr}>(оплата на месте)</Text>
					</View>
					<View>
						<Text style={styles.totalCount}>{total}р</Text>
					</View>
				</View>

				<Pressable
					style={[styles.totalBtn, { opacity: total < 1 ? 0.7 : 1 }]}
					onPress={setCart}
				>
					<CreateButton text={titleBtn.text} />
				</Pressable>
			</View>
		</View>
	);
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
export default AddToCart;
