import React, { useContext } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { CreateButton } from "src/UTILS";
import THEME from "src/THEME";
import { NavigationContext } from "src/context/navigation-context";
import { IsLogged } from "src/context/isLogged";
const AddToCartServices = ({
	productItem,
	bookingAddServices,
	room = null,
}) => {
	const navigation = useContext(NavigationContext);
	const isLogged = useContext(IsLogged);

	return (
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
				<CreateButton text={"Заказать услугу"} isLogged={isLogged} />
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapBtn: {
		marginTop: 0,
		paddingHorizontal: THEME.paddingHorizontal,
	},
});
export default AddToCartServices;
