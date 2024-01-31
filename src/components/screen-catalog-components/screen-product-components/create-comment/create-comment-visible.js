import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { CreateButton } from "src/UTILS";
import { IsLogged } from "src/context/isLogged";
const CreateCommentVisible = ({
	value,
	changeValue,
	sentCommit,
	placeholder,
}) => {
	const isLogged = useContext(IsLogged);
	return (
		<View style={styles.container}>
			<Text style={styles.titleReview}>Мой отзыв:</Text>
			<View style={styles.blockReview}>
				<TextInput
					style={[styles.inputReview, placeholder.styles]}
					autoFocus={false}
					onChangeText={(value) => changeValue(value)}
					multiline={true}
					value={value}
					numberOfLines={4}
					placeholder={placeholder.text}
					placeholderTextColor={placeholder.styles.color}
				/>
				<Pressable
					disabled={!isLogged}
					style={styles.btnReview}
					onPress={() => {
						sentCommit();
					}}
				>
					<CreateButton text={"Отправить"} isLogged={isLogged} />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		marginTop: 15,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	titleReview: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	blockReview: {},
	inputReview: {
		textAlignVertical: "top",
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderColor: THEME.colors.green,
		borderWidth: 1,
		borderRadius: 3,
		height: 80,
	},
	btnReview: { marginTop: 4 },
});

export default CreateCommentVisible;
