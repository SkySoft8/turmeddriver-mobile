import React, { useState, useImperativeHandle, forwardRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import THEME from "src/THEME";
import IconMinus from "assets/svg/iconMinus";

import IconPlus from "assets/svg/iconPlus";
const CountPersons = (props, ref) => {
	const [countPerson, setCountPerson] = useState(1);
	const returnCountPersonState = () => countPerson;
	useImperativeHandle(ref, () => ({ returnCountPersonState }));
	return (
		<View style={styles.bookingCountPersons}>
			<Text style={styles.countDescr}>Количество человек:</Text>
			<View style={styles.countPersons}>
				<Pressable
					style={styles.changeCountPersons}
					onPress={() =>
						setCountPerson((prev) => (prev - 1 != 0 ? prev - 1 : prev))
					}
				>
					<IconMinus />
				</Pressable>
				<Text style={styles.textCountPersons}>{countPerson}</Text>
				<Pressable
					style={styles.changeCountPersons}
					onPress={() =>
						setCountPerson((prev) => (prev + 1 != 10 ? prev + 1 : prev))
					}
				>
					<IconPlus />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	bookingCountPersons: {
		marginTop: 20,

		flexDirection: "row",
		alignItems: "center",
	},
	countDescr: {
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
	},
	countPersons: {
		marginLeft: "10%",
		flexDirection: "row",
		alignItems: "center",
	},
	changeCountPersons: {
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",

		borderWidth: 1,
		borderRadius: 3,

		borderColor: THEME.colors.green,
	},
	textCountPersons: {
		width: 30,
		textAlign: "center",
		// paddingHorizontal: 10,
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
	},
});
export default forwardRef(CountPersons);
