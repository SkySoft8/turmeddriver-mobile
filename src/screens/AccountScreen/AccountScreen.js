import React from "react";
import { View, StyleSheet } from "react-native";
import AuthorizationScreen from "./AuthorizationScreen";
import ProfileScreen from "./ProfileScreen";
import { connect } from "react-redux";

const AccountScreen = ({ navigation, isLogged }) => {
	const visible = isLogged ? (
		<ProfileScreen navigation={navigation} />
	) : (
		<AuthorizationScreen navigation={navigation} style={{ flex: 1 }} />
	);

	return (
		<View style={[styles.container, { flex: isLogged ? 1 : 1 }]}>
			{visible}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		paddingBottom: 10,
	},
});
const mapStateToProps = ({ usersData }) => {
	const { isLogged } = usersData;
	return { isLogged };
};
export default connect(mapStateToProps, null)(AccountScreen);
