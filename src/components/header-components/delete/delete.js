import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

import IconRemove from "assets/svg/iconRemove";
const Delete = ({ removeAction }) => {
	return (
		<View>
			<Pressable onPress={removeAction}>
				<IconRemove />
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default Delete;
