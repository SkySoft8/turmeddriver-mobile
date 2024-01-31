import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import IconFilter from "assets/svg/iconFilter";
import IconClose from "assets/svg/iconClose";
const Filter = ({ showFilter, changeVisibleFilter }) => {
	const visible = showFilter ? <IconClose /> : <IconFilter />;
	return (
		<View style={styles.filter}>
			<Pressable style={styles.filterButton} onPress={changeVisibleFilter}>
				{visible}
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default Filter;
