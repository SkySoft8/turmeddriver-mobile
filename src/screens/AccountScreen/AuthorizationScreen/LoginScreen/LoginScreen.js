import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderAccount from "src/components/header-components/header-account";
import Login from "src/components/screen-account-components/screen-authorization-components/login";
const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderAccount
				goBack={true}
				title={"Вход"}
				activeEdit={false}
				navigation={navigation}
			/>
			<Login navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1 },
});
export default LoginScreen;
