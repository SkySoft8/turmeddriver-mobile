import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
const ChoiceGender = ({ setData, initValue }) => {
	const data = [
		{ id: 0, keyData: "men", title: "Мужской" },
		{ id: 1, keyData: "women", title: "Женский" },
	];

	const [gender, setGender] = useState(initValue);
	const activeGender = (gen) => {
		setGender(gen);
		setData("gender", gen);
	};
	return (
		<View style={styles.wrapChoice}>
			{data.map((item) => {
				return (
					<View key={item.id} style={styles.column}>
						<Pressable
							onPress={() => activeGender(item.keyData)}
							style={styles.columnBtn}
						>
							<View style={styles.wrapCircle}>
								<View
									style={[
										styles.circle,
										{
											backgroundColor:
												gender === item.keyData ? "#000" : "transparent",
										},
									]}
								/>
							</View>
							<Text style={styles.genTitle}>{item.title}</Text>
						</Pressable>
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	wrapChoice: {
		marginTop: 8,
		flexDirection: "row",
	},
	column: {
		width: 100,
		marginRight: 10,
	},
	columnBtn: {
		flexDirection: "row",
		alignItems: "center",
	},
	wrapCircle: {
		width: 22,
		height: 22,
		borderRadius: 120,
		borderColor: "#000",
		borderWidth: 1,
		marginRight: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	circle: {
		width: 16,
		height: 16,
		borderRadius: 100,
		backgroundColor: "transparent",
	},
	circleActive: {
		backgroundColor: "#000",
	},
	genTitle: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 12,
		color: THEME.colors.defaultText,
	},
});
export default ChoiceGender;
