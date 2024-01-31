import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { CreateInput, CreateButton } from "src/UTILS";
import IconProfile from "assets/svg/iconProfile";
import LoadingSpinner from "src/components/loading-spinner";
import THEME from "src/THEME";
const RegistrationVisible = ({
	loading,
	message,
	sentForm,
	setData,
	dataForm,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.blockForm}>
				<IconProfile />
				<View style={styles.form}>
					<View style={styles.blockMessage}>
						{loading && <LoadingSpinner />}
						{message && <Text style={styles.textMessage}>{message}</Text>}
					</View>
					<View style={styles.row}>
						<CreateInput
							title={"Имя"}
							keyData={"name"}
							type={"default"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
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
					<View style={styles.row}>
						<CreateInput
							title={"Пароль"}
							keyData={"passwordRepeat"}
							type={"password"}
							setData={setData}
							error={dataForm.error}
						/>
					</View>
					<Pressable
						style={styles.btnForm}
						onPress={() => sentForm(dataForm.data)}
					>
						<CreateButton text={"Зарегистрироваться"} />
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
	blockMessage: {
		position: "absolute",
		width: "100%",

		top: -20,
	},
	textMessage: {
		textAlign: "center",
		color: THEME.colors.defaultText,
		fontSize: 16,
		fontFamily: THEME.font.InterMedium,
	},
	form: { marginTop: 25, width: "100%" },
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
export default RegistrationVisible;
