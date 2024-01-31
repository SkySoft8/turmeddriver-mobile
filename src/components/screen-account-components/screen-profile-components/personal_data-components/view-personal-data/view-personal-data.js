import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { dateVisible, viewAge } from "src/UTILS";

import THEME from "src/THEME";

const ViewPersonalData = ({ personalDataList, logOut }) => {
	const {
		id,
		age,
		email,
		gender,
		name,
		phone,
		surname,
		user_city,
		user_district,
	} = personalDataList;

	return (
		<View style={styles.container}>
			<View>
				<View style={[styles.rowData, { marginTop: 0 }]}>
					<Text style={styles.nameRow}>Фамилия</Text>
					<Text style={styles.inputRow}>{surname}</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Имя</Text>
					<Text style={styles.inputRow}>{name}</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Возраст</Text>
					<Text style={styles.inputRow}>
						{age}
						{/* {dateVisible(date).length > 1 &&
							`${dateVisible(date)} (${viewAge(date)})`} */}
					</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Пол</Text>
					<Text style={styles.inputRow}>
						{gender == "women" ? "Женский" : "Мужской"}
					</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Email</Text>
					<Text style={styles.inputRow}>{email}</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Телефон</Text>
					<Text style={styles.inputRow}>{phone}</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Страна</Text>
					<Text style={styles.inputRow}>{user_district}</Text>
				</View>

				<View style={styles.rowData}>
					<Text style={styles.nameRow}>Город</Text>
					<Text style={styles.inputRow}>{user_city}</Text>
				</View>

				<View>
					<Text
						style={styles.unloggin}
						onPress={() => {
							logOut();
						}}
					>
						Выйти
					</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignContent: "center",
		marginTop: 20,
	},
	rowData: { marginTop: 12 },
	nameRow: {
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
		color: THEME.colors.defaultText,
	},
	inputRow: {
		color: "red",
		marginTop: 4,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
		color: THEME.colors.defaultText,
	},
	unloggin: {
		marginTop: 20,
		fontFamily: THEME.font.InterMedium,
		fontSize: 16,
		color: "#E14E66",
	},
});

export default ViewPersonalData;
