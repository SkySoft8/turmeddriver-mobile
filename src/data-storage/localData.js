import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalData {
	// greeting screen
	setGreetingScreen = async (value) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("greeting-screen-show", jsonValue);
		} catch (e) {
			console.log("setGreetingScreen");
			console.log(e);
		}
	};
	getGreetingScreen = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("greeting-screen-show");

			return jsonValue != null ? JSON.parse(jsonValue) : true;
		} catch (e) {
			console.log("getGreetingScreen");
			console.log(e);
		}
	};
	////

	//get active user
	getUser = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("active-user");
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (error) {
			console.log("error with get user");
			console.log(error);
		}
	};

	setUser = async (user) => {
		try {
			const jsonValue = JSON.stringify(user);
			await AsyncStorage.setItem("active-user", jsonValue);
		} catch (error) {
			console.log("error with set user");
			console.log(error);
		}
	};
	mergeUser = async (user) => {
		try {
			await AsyncStorage.mergeItem("active-user", JSON.stringify(user));
		} catch (error) {
			console.log("error with merge");
			console.log(error);
		}
	};

	removeUser = async () => {
		try {
			await AsyncStorage.removeItem("active-user");
		} catch (e) {
			console.log(`fetch error: ${e}`);
		}
	};

	// Personal Data
	getPersonalData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("personal-data");

			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			console.log(`fetch error: ${e}`);
		}
	};

	setPersonalData = async (id, data) => {
		try {
			const jsonValue = JSON.stringify(data);
			await AsyncStorage.setItem("personal-data", jsonValue);
		} catch (e) {
			console.log(`fetch error: ${e}`);
		}
	};
}
