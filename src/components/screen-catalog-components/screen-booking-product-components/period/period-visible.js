import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PeriodChoice from "../period-choice";
const PeriodVisible = ({
	haveRoomData,
	changePeriod,
	periodStart,
	periodEnd,
	countDay,
}) => {
	return (
		<View style={styles.bookingDate}>
			<View style={[styles.dateStart, styles.dateColumn]}>
				<Text>
					{haveRoomData ? "Начало поездки" : "Дата посещения"}{" "}
					{countDay ? `(${countDay}д.)` : ""}
				</Text>
				<PeriodChoice
					changePeriod={changePeriod}
					initValue={periodStart}
					keyValue={"periodStart"}
				/>
			</View>
			{haveRoomData && (
				<View style={[styles.dateEnd, styles.dateColumn]}>
					<Text>Окончание поездки</Text>
					<PeriodChoice
						changePeriod={changePeriod}
						initValue={periodEnd}
						periodStart={periodStart}
						keyValue={"periodEnd"}
					/>
				</View>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	bookingDate: {
		width: "100%",
		marginTop: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	dateColumn: {
		width: "49%",
	},
});
export default PeriodVisible;
