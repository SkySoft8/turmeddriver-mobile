import React, { useState } from "react";
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
	StatusBar,
} from "react-native";

import IconClose from "assets/svg/iconClose";
import IconCheckMark from "assets/svg/iconCheckMark";
import THEME from "src/THEME";
import { CreateButton } from "src/UTILS";

import IconCheck from "assets/images/greetingScreen/iconCheck";
import IconLogo from "assets/images/greetingScreen/iconLogo";
import IconPresent from "assets/images/greetingScreen/iconPresent";
import IconStar from "assets/images/greetingScreen/iconStar";
import { Dimensions } from "react-native";
const factorHeight = (height) => {
	const factor = (100 / Dimensions.get("window").height).toFixed(2);
	return `${height * factor}%`;
};

const GreetingScreen = ({ changeAppGreeting }) => {
	const [show, setShow] = useState(true);
	return (
		<>
			<View style={styles.container}>
				<ImageBackground
					style={{ flex: 1 }}
					// @ts-ignore
					source={require("../../../assets/images/greetingScreen/bgc.jpg")}
				>
					<View style={styles.wrap}>
						<View style={styles.header}>
							<IconLogo />
							<Pressable onPress={() => changeAppGreeting(show)}>
								<IconClose color={"#fff"} />
							</Pressable>
						</View>
						<View style={styles.content}>
							<IconPresent height={"27%"} />
							<IconCheck height={"27%"} />
							<IconStar height={"27%"} />
						</View>
						<View style={styles.footer}>
							<Pressable onPress={() => changeAppGreeting(show)}>
								<CreateButton text={"Начать отдых!"} />
							</Pressable>
							<Pressable
								style={styles.footerCheck}
								onPress={() => setShow((prev) => !prev)}
							>
								<View style={styles.checkBox}>
									{!show && <IconCheckMark />}
								</View>
								<Text style={styles.checkText}>Больше не показывать</Text>
							</Pressable>
						</View>
					</View>
				</ImageBackground>
			</View>
			<StatusBar
				animated={true}
				translucent={false}
				backgroundColor="#000"
				barStyle="light-content"
			/>
		</>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignContent: "center" },
	wrap: {
		flex: 1,
		padding: 30,
		paddingTop: factorHeight(45),

		justifyContent: "space-between",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	content: {
		marginTop: factorHeight(30),
		justifyContent: "space-between",
		alignItems: "center",
	},
	footer: {
		marginTop: factorHeight(35),
	},
	footerCheck: {
		marginTop: factorHeight(10),
		flexDirection: "row",
		alignItems: "center",
	},
	checkBox: {
		width: 22,
		height: 22,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#D6D6D6",
		justifyContent: "center",
		alignItems: "center",
	},
	checkText: {
		marginLeft: 8,
		fontSize: 14,
		fontFamily: THEME.font.InterMedium,
		color: "#505050",
	},
});
export default GreetingScreen;
