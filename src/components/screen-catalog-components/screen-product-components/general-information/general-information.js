import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

import THEME from "src/THEME";
import IconTelephone from "assets/svg/iconTelephone";
import IconGeo from "assets/svg/iconGeo";
const GeneralInformation = ({ content, address, phone }) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapInfo}>
				<Text style={styles.infoText}>{content}</Text>
			</View>
			<View style={styles.wrapContact}>
				<View style={styles.rowContact}>
					<IconGeo style={styles.contactIcon} />
					<Text style={styles.contactAdress}>{address}</Text>
				</View>
				<View style={[styles.rowContact, styles.rowContactTel]}>
					<IconTelephone style={styles.contactIcon} />
					<Text
						style={styles.contactTel}
						onPress={() => Linking.openURL(`tel:${phone}`)}
					>
						{phone}
					</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		marginTop: 12,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	infoText: {
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	wrapContact: {
		borderTopColor: "#D6D6D6",
		borderTopWidth: 1,
		borderBottomColor: "#D6D6D6",
		borderBottomWidth: 1,
		marginTop: 12,
		paddingVertical: 14,
		paddingHorizontal: 5,
	},
	rowContact: {
		flexDirection: "row",
		alignItems: "center",
	},
	rowContactTel: { marginTop: 6 },
	contactIcon: {
		marginRight: 10,
	},
	contactAdress: {
		flex: 1,
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	contactTel: {
		color: THEME.colors.title,
		fontSize: 16,
		fontFamily: THEME.font.InterBold,
	},
});
export default GeneralInformation;
