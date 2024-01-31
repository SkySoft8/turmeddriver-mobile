import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CreateInput = ({
	change = true,
	initValue = "",
	title,
	keyData,
	type,
	setData,
	error,
}) => {
	const [value, setValue] = useState(initValue);
	const password = type === "password" ? true : false;
	const errorField = error.indexOf(keyData) > -1 ? true : false;
	const getValue = (val) => {
		setValue(val);
		setData(keyData, val);
	};

	return (
		<>
			<Text style={styles.rowTitle}>{title}</Text>
			{change ? (
				<TextInput
					secureTextEntry={password}
					password={password}
					keyboardType={type === "password" ? "default" : type}
					autoCorrect={false}
					onChangeText={getValue}
					style={[styles.rowInput, errorField ? styles.rowInputError : ""]}
					autoFocus={false}
					value={value}
				/>
			) : (
				<Text style={styles.rowText}>{value}</Text>
			)}
		</>
	);
};
const styles = StyleSheet.create({
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
	rowText: {
		marginTop: 4,
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
		paddingVertical: 11,
		paddingHorizontal: 12,
	},
	rowInputError: {
		borderColor: "red",
	},
});
export default CreateInput;
