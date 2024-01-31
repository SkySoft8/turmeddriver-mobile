import * as Font from "expo-font";
import { PermissionsAndroid } from "react-native";
import { StorageAccessFramework } from "expo-file-system";
const loadFonts = async () => {
	await Font.loadAsync({
		"Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
		"Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
		"Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
		"Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
		"Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
	});
};

const permissionsProject = async () => {
	// await StorageAccessFramework.requestDirectoryPermissionsAsync();

	const granted = await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
		{
			title: "Cool Calendar Permission",
			message: "Give me you're calendaaar ",
			buttonNeutral: "Ask Me Later",
			buttonNegative: "Cancel",
			buttonPositive: "OK",
		}
	);
	if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		console.log("You can use the calendar");
	}
};
const initProject = async () => {
	// await permissionsProject();
	await loadFonts();
};

export default initProject;
