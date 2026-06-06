import { useFonts } from "expo-font";
import { PermissionsAndroid } from "react-native";
import { StorageAccessFramework } from "expo-file-system";

const fontAssets = {
	"Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
	"Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
	"Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
	"Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
	"Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
};

const loadFonts = async () => {
	// В SDK 53 шрифты загружаются через useFonts hook
	// Этот код будет обновлен в App.js
	return Promise.resolve();
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
export { fontAssets };
