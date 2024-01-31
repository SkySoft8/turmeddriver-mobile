import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "src/THEME";
import RoomItem from "./room-item";
import TitleBlock from "../title-block/title-block";

const RoomsList = ({ roomsList, titleRooms, bookingAddServices }) => {
	return (
		<View style={styles.container}>
			<TitleBlock title={titleRooms} />

			<Text style={styles.blockTitleDescr}>
				*цена указана без учета лечебных процедур
			</Text>
			<View style={styles.wrapBlockHotels}>
				{roomsList.map((room) => {
					return (
						<View key={room.id}>
							<RoomItem room={room} bookingAddServices={bookingAddServices} />
						</View>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 25,
	},
	blockTitle: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.title,
		fontSize: 16,

		borderBottomColor: THEME.colors.title,
		borderBottomWidth: 1,
	},
	blockTitleDescr: {
		marginTop: 15,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},

	wrapBlockHotels: {},
});
export default RoomsList;
