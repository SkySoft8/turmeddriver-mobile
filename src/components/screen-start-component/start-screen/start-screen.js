import { ScrollView } from "react-native";

import { useState, useEffect } from "react";
import MainContent from "../main-content";
import GreetingScreen from "src/screens/GreetingScreen";

import LocalData from "src/data-storage/localData";

const localData = new LocalData();

const StartScreen = ({ onLayoutAppView, linking }) => {
	const [appGreeting, setAppGreeting] = useState(Boolean);

	//Set greeting screen in local data
	const changeAppGreeting = (show) => {
		if (appGreeting != show) {
			localData.setGreetingScreen(show);
			setAppGreeting(show);
			return;
		}

		setAppGreeting(!show);
	};
	useEffect(() => {
		const fetchGreeting = async () => {
			await localData.getGreetingScreen().then((el) => setAppGreeting(el));
		};
		fetchGreeting();
	}, []);

	return (
		<ScrollView
			onLayout={onLayoutAppView}
			contentContainerStyle={{
				display: "flex",
				flex: 1,
				justifyContent: "flex-end",
				backgroundColor: "#fff",
			}}
		>
			{appGreeting ? (
				<GreetingScreen changeAppGreeting={changeAppGreeting} />
			) : (
				<MainContent linking={linking} />
			)}
		</ScrollView>
	);
};

export default StartScreen;
