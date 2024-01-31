import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderAccount from "src/components/header-components/header-account";
import Registration from "src/components/screen-account-components/screen-authorization-components/registration";
const RegistrationScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderAccount
				goBack={true}
				title={"Регистрация"}
				activeEdit={false}
				navigation={navigation}
			/>
			<Registration navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1 },
});
export default RegistrationScreen;
