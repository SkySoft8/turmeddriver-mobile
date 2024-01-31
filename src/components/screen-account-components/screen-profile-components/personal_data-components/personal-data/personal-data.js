import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import GetPersonalData from "../get-personal-data";
import GetEditPersonalData from "../get-edit-personal-data";
const PersonalData = ({ accessEdit, changeAccessEdit }) => {
	const visible = accessEdit ? (
		<GetEditPersonalData changeAccess={changeAccessEdit} />
	) : (
		<GetPersonalData />
	);
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			{visible}
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1 },
});
export default PersonalData;
