import { Text, View } from "react-native";

import "expo-dev-client";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import initProject, { fontAssets } from "src/INIT-PROJECT";

import { Provider } from "react-redux";
import { store } from "src/redux/store";
import ErrorBoundary from "src/components/error-boundary";
import StartScreen from "src/components/screen-start-component/start-screen";

import * as Linking from "expo-linking";
const prefix = Linking.createURL("/");
SplashScreen.preventAutoHideAsync();
export default function App() {
	const [appReady, setAppReady] = useState(false);
	const [fontsLoaded] = useFonts(fontAssets);

	//deep links
	const config = {
		screens: {
			NavigatorCart: {
				path: "cart",
				screens: {
					SuccessPayment: "success",
				},
			},
		},
	};
	const linking = {
		prefixes: [prefix],
		config,
	};

	useEffect(() => {
		async function prepareApp() {
			try {
				await initProject();
			} catch (error) {
				console.log("Error with prepare APP:" + error);
			} finally {
				setAppReady(true);
			}
		}
		prepareApp();
	}, []);

	useEffect(() => {
		if (fontsLoaded && appReady) {
			setAppReady(true);
		}
	}, [fontsLoaded, appReady]);

	const onLayoutAppView = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady || !fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fff" }}>
			<Provider store={store}>
				<ErrorBoundary>
					<StartScreen onLayoutAppView={onLayoutAppView} linking={linking} />
				</ErrorBoundary>
			</Provider>
		</GestureHandlerRootView>
	);
}
