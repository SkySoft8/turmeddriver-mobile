import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

import { CreateButton, CreateInput } from "src/UTILS";
import THEME from "src/THEME";
import IconProfile from "assets/svg/iconProfile";
import LoadingSpinner from "src/components/loading-spinner";
const LoginVisible = ({
	dataForm,
	setData,
	sentForm,
	isLogged,
	errorAuth,
	activeUser,
	navigation,
	loading,
}) => {
	const initMessage = {
		text: "",
		color: "#fff",
	};
	const [message, setMessage] = useState(initMessage);
	const goBack = () => {
		navigation.navigate("AccountScreen");
	};

	useEffect(() => {
		if (errorAuth == "errorAuthData") {
			setMessage({ text: "Неверный логин или пароль!", color: "#E14E66" });
			setTimeout(() => {
				setMessage(initMessage);
			}, 2000);
		}
		if (isLogged) {
			setMessage({
				text: `Добро пожаловать,${activeUser.name}!`,
				color: "#51D3B7",
			});
			setTimeout(() => {
				goBack();
			}, 1000);
		}
	}, [isLogged, errorAuth]);
	return (
		<View style={styles.container}>
			<View style={styles.blockForm}>
				<IconProfile />
				<View style={styles.wrapAnswer}>
					<Text style={[styles.wrapAnswerText, { color: message.color }]}>
						{message.text}
					</Text>
					{loading && <LoadingSpinner />}
				</View>

				<View style={styles.form}>
					<View style={styles.row}>
						<CreateInput
							title={"Email"}
							keyData={"email"}
							type={"email-address"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<View style={styles.row}>
						<CreateInput
							title={"Пароль"}
							keyData={"password"}
							type={"password"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<Pressable
						style={styles.btnForm}
						onPress={() => sentForm(dataForm.data)}
					>
						<CreateButton text={"Войти"} />
					</Pressable>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
	},
	blockForm: {
		alignItems: "center",
	},
	wrapAnswer: {
		height: 30,
	},
	wrapAnswerText: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 16,
	},
	form: { marginTop: 5, width: "100%" },
	row: { marginTop: 8, width: "100%" },
	rowTitle: {
		color: THEME.colors.defaultText,

		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
	rowInput: {
		marginTop: 4,
		paddingVertical: 11,
		paddingHorizontal: 12,
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: THEME.colors.green,
	},
	btnForm: {
		marginTop: 20,
	},
});
export default LoginVisible;
