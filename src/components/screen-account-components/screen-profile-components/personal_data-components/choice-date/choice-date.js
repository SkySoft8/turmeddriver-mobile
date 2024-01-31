import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import THEME from "src/THEME";

import { dateVisible, viewAge } from "src/UTILS";
const ChoiceDate = ({ setData, initValue }) => {
	let initState = new Date();

	// if (initValue.toString().length > 1) {
	// 	initState = new Date(initValue);
	// }
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setData("age", viewAge(currentDate));
		setShow(false);
	};

	const showDatepicker = () => {
		setShow(true);
	};

	return (
		<View style={styles.rowInput}>
			{/* {initValue.toString().length > 1 && (
				<Text style={styles.date}>
					{dateVisible(initState)} ({viewAge(initState)})
				</Text>
			)} */}

			<Text style={styles.date}>{initValue}</Text>
			<Text style={styles.changeDateText} onPress={showDatepicker}>
				Изменить
			</Text>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={initState}
					mode="date"
					is24Hour={true}
					onChange={onChange}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	rowInput: {
		marginTop: 4,
		flexDirection: "row",
		paddingVertical: 14,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: THEME.colors.green,
		alignItems: "center",
	},
	date: {
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
		marginRight: 25,
	},
	changeDateText: {
		fontSize: 16,
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.green,
	},
});
export default ChoiceDate;
