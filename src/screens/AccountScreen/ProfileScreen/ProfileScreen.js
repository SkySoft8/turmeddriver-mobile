import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderAccount from "src/components/header-components/header-account";
import TabsProfile from "src/components/screen-account-components/screen-profile-components/tabs-profile";
const ProfileScreen = ({ navigation }) => {
	const [activeEdit, setActiveEdit] = useState(true);
	const [accessEdit, setAccessEdit] = useState(false);
	const changeActiveTab = (index) => {
		setActiveEdit(index == 0 ? true : false);
	};
	const changeAccessEdit = () => {
		setAccessEdit((prev) => !prev);
	};
	return (
		<View style={styles.container}>
			<HeaderAccount
				goBack={true}
				title={"Личный кабинет"}
				activeEdit={activeEdit}
				navigation={navigation}
				changeAccessEdit={changeAccessEdit}
				accessEdit={accessEdit}
			/>

			<TabsProfile
				changeActiveTab={changeActiveTab}
				accessEdit={accessEdit}
				changeAccessEdit={changeAccessEdit}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,

		justifyContent: "center",
		alignContent: "center",
		paddingBottom: 50,
	},
});
export default ProfileScreen;
