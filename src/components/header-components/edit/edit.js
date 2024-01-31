import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import IconPencil from "assets/svg/iconPencil";
const Edit = ({ changeAccessEdit, accessEdit }) => {
	const colorEdit = accessEdit ? "#D6D6D6" : "#505050";
	return (
		<View style={styles.filter}>
			<Pressable style={styles.filterButton} onPress={changeAccessEdit}>
				<IconPencil colorEdit={colorEdit} />
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default Edit;
