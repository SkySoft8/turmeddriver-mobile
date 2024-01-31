import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import IconCart from "assets/svg/iconCart";

import THEME from "src/THEME";
import { CreateButton } from "src/UTILS";
const EmptyCart = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockCart}>
				<IconCart />
				<Text style={styles.titleCart}>Ваша корзина пуста</Text>
				<Text style={styles.textCart}>
					Воспользуйтесь каталогом, чтобы добавить услугу в корзину
				</Text>

				<Pressable
					style={styles.toCatalog}
					onPress={() => navigation.navigate("NavigatorCatalog")}
				>
					<CreateButton text={"Перейти в каталог"} />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	blockCart: { width: "60%", alignItems: "center" },
	titleCart: {
		textAlign: "center",
		marginTop: 10,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterBold,
		fontSize: 16,
	},
	textCart: {
		width: Dimensions.get("window").width * 0.59,
		textAlign: "center",
		marginTop: 5,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
	},
	toCatalog: {
		marginTop: 15,
		width: "100%",
	},
});
export default EmptyCart;
