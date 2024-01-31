import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SliderHotel from "../slider-hotel";
import THEME from "src/THEME";
import { CreateButton, SliceArray } from "src/UTILS";
import { IsLogged } from "src/context/isLogged";
import { NavigationContext } from "src/context/navigation-context";
const RoomItem = ({ room, bookingAddServices, productItem }) => {
	const navigation = useContext(NavigationContext);
	const isLogged = useContext(IsLogged);
	const { id, title, berth, category, image_post, post, price, tags } = room;
	let imagesLink = [];
	image_post.map((image) => {
		imagesLink.push(image.images);
	});
	return (
		<View style={styles.wrapHotel}>
			<SliderHotel images={imagesLink} />

			<View style={styles.headHotel}>
				<Text style={styles.headText}>{category}</Text>
				<Text style={styles.headDescrText}>
					({berth} {berth == 1 ? `спальное место` : "спальный мест"})
				</Text>
			</View>
			<View style={styles.blockListHotel}>
				<SliceArray data={tags} />
			</View>
			<Text style={styles.priceHotel}> {price}р за сутки</Text>
			<View style={styles.wrapBtn}>
				<Pressable
					disabled={!isLogged}
					onPress={() =>
						navigation.navigate("Booking", {
							productItem,
							bookingAddServices,
							roomData: room,
						})
					}
				>
					<CreateButton text={"Забронировать"} isLogged={isLogged} />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapHotel: { marginTop: 15 },

	headHotel: {
		marginTop: 10,
	},
	headText: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.title,
		fontSize: 14,
	},
	headDescrText: {
		marginTop: 2,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	blockListHotel: {
		width: "90%",
		marginTop: 10,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	priceHotel: {
		marginTop: 10,
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	wrapBtn: { marginTop: 15 },
});
export default RoomItem;
