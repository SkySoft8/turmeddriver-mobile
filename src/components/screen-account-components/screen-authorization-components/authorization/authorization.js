import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconProfile from "assets/svg/iconProfile";
import { CreateButton } from "src/UTILS";
import THEME from "src/THEME";
const Authorization = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockAuth}>
				<IconProfile />
				<Text style={styles.textAuth}>
					Личный кабинет доступен только авторизованным пользователям
				</Text>
				<Pressable
					style={styles.loginBtn}
					onPress={() => navigation.navigate("Login")}
				>
					<CreateButton text={"Войти"} />
				</Pressable>
				<Pressable
					style={styles.regBtn}
					onPress={() => navigation.navigate("Registration")}
				>
					<Text style={styles.regBtnText}>Зарегестрироваться</Text>
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	blockAuth: { width: "60%", alignItems: "center" },

	textAuth: {
		width: "90%",
		textAlign: "center",
		marginTop: 10,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
	},
	loginBtn: {
		marginTop: 15,
		width: "100%",
	},
	regBtn: {
		marginTop: 15,
	},
	regBtnText: {
		color: THEME.colors.green,
		fontFamily: THEME.font.InterMedium,
		fontSize: 16,
	},
});
export default Authorization;
