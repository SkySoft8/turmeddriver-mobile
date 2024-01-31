import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import THEME from "src/THEME";
import IconCalendar from "assets/svg/iconCalendar";
import { dateVisible } from "src/UTILS";
const PeriodChoiceVisible = ({
	date,
	minimumDay,
	show,
	initValueLength,
	showDatepicker,
	onChangeDate,
}) => {
	return (
		<View style={styles.rowInput}>
			<Text
				style={[
					styles.date,
					{
						color: initValueLength > 1 ? THEME.colors.defaultText : "#A8A8A8",
					},
				]}
			>
				{initValueLength > 1 ? dateVisible(date) : "Выбрать дату"}
			</Text>
			<Pressable onPress={showDatepicker}>
				<IconCalendar />
			</Pressable>

			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					minimumDate={minimumDay ? minimumDay : new Date()}
					mode="date"
					is24Hour={true}
					onChange={onChangeDate}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	rowInput: {
		width: "100%",
		minWidth: 160,
		marginTop: 4,
		flexDirection: "row",
		paddingVertical: 11,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: THEME.colors.green,
		alignItems: "center",
		justifyContent: "space-between",
	},
	date: {
		width: "80%",

		fontSize: 14,
		fontFamily: THEME.font.InterMedium,

		// marginRight: 25,
	},
});
export default PeriodChoiceVisible;
