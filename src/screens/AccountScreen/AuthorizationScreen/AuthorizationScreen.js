import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderAccount from "src/components/header-components/header-account";
import Authorization from "src/components/screen-account-components/screen-authorization-components/authorization";
const AuthorizationScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderAccount
				goBack={true}
				title={"Личный кабинет"}
				activeEdit={false}
				navigation={navigation}
			/>
			<Authorization navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
});
export default AuthorizationScreen;
