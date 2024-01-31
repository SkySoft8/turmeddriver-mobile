import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import THEME from "src/THEME";
import IconMinus from "assets/svg/iconMinus";
import IconPlus from "assets/svg/iconPlus";
const AdditServicesVisible = ({
	cartCategory,
	cartItemCategory,
	changeServices,
}) => {
	return (
		<View style={styles.servicesProduct}>
			<Text style={styles.titleServicesProduct}>Процедуры и обследования</Text>
			<View style={styles.wrapServices}>
				{cartCategory.map((cart) => {
					return (
						<View
							key={cart.id}
							style={[styles.blockServices, { marginTop: 10 }]}
						>
							<Text style={styles.titleBlockServices}>{cart.title}</Text>
							{cartItemCategory.map((itemCart) => {
								if (itemCart.todo_list_id == cart.id) {
									return (
										<Item
											key={itemCart.id}
											itemCart={itemCart}
											changeServices={changeServices}
										/>
									);
								}
							})}
						</View>
					);
				})}
			</View>
		</View>
	);
};

const Item = React.memo(({ itemCart, changeServices }) => {
	return (
		<View style={styles.rowService}>
			<Text style={styles.serviceText}>{itemCart.title}</Text>
			<View style={styles.countService}>
				<Pressable
					style={styles.changeCountService}
					onPress={() => changeServices(itemCart, -1)}
				>
					<IconMinus />
				</Pressable>
				<Text style={styles.textCountService}>{itemCart.count}</Text>
				<Pressable
					style={styles.changeCountService}
					onPress={() => changeServices(itemCart, 1)}
				>
					<IconPlus />
				</Pressable>
			</View>
			<Text numberOfLines={1} style={styles.servicePrice}>
				{itemCart.price == "0" ? "Бесплатно" : `${itemCart.price}p`}
			</Text>
		</View>
	);
});

const styles = StyleSheet.create({
	servicesProduct: {
		marginTop: 20,
	},
	titleServicesProduct: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.title,
		fontSize: 14,
	},
	wrapServices: {
		marginTop: 12,
	},
	titleBlockServices: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.green,
		fontSize: 14,
	},
	rowService: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	serviceText: {
		width: "45%",
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},

	countService: {
		marginLeft: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	changeCountService: {
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",

		borderWidth: 1,
		borderRadius: 3,

		borderColor: THEME.colors.green,
	},
	textCountService: {
		width: 30,
		textAlign: "center",
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
	},
	servicePrice: {
		textAlign: "right",
		width: "20%",
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
});
export default AdditServicesVisible;
