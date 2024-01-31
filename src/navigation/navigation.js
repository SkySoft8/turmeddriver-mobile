import { useState } from "react";
import { View, Text } from "react-native";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import CatalogScreen from "src/screens/CatalogScreen";
import CardScreen from "src/screens/CatalogScreen/CardScreen";
import BookingModal from "src/screens/CatalogScreen/CardScreen/BookingModal";
import CartScreen from "src/screens/CartScreen";
import AccountScreen from "src/screens/AccountScreen";
import LoginScreen from "src/screens/AccountScreen/AuthorizationScreen/LoginScreen";
import RegistrationScreen from "src/screens/AccountScreen/AuthorizationScreen/RegistrationScreen";
import SuccessPaymentScreen from "src/screens/SuccessPaymentScreen";
import { connect } from "react-redux";
const BottomTab = createBottomTabNavigator();
const NativeNavigator = createNativeStackNavigator();

const Navigation = ({ cartCount, linking }) => {
	return (
		<NavigationContainer
			theme={{
				colors: { background: "transparent" },
			}}
			linking={linking}
			fallback={<Text></Text>}
		>
			<BottomTab.Navigator
				screenOptions={({ route }) => BottomNavigatorConfig(route, cartCount)}
			>
				<BottomTab.Screen
					name="NavigatorCatalog"
					component={NavigatorCatalog}
				/>

				<BottomTab.Screen name="NavigatorCart" component={NavigatorCart} />

				<BottomTab.Screen
					name="NavigatorAccount"
					component={NavigatorAccount}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

const NavigatorCatalog = () => {
	return (
		<NativeNavigator.Navigator
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,
				animation: "slide_from_left",
			}}
		>
			<NativeNavigator.Screen name="Catalog" component={CatalogScreen} />
			<NativeNavigator.Screen name="Card" component={CardScreen} />
			<NativeNavigator.Screen name="Booking" component={BookingModal} />
		</NativeNavigator.Navigator>
	);
};

const NavigatorCart = () => {
	return (
		<NativeNavigator.Navigator
			initialRouteName="Cart"
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,

				animation: "slide_from_bottom",
			}}
		>
			<NativeNavigator.Screen
				name="SuccessPayment"
				component={SuccessPaymentScreen}
			/>
			<NativeNavigator.Screen name="Cart" component={CartScreen} />
		</NativeNavigator.Navigator>
	);
};

const NavigatorAccount = () => {
	return (
		<NativeNavigator.Navigator
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,
				animation: "slide_from_left",
			}}
		>
			<NativeNavigator.Screen name="AccountScreen" component={AccountScreen} />
			<NativeNavigator.Screen name="Login" component={LoginScreen} />
			<NativeNavigator.Screen
				name="Registration"
				component={RegistrationScreen}
			/>
		</NativeNavigator.Navigator>
	);
};
//configs
const createIcon = (Comp, name, size, color, notif = false) => {
	return (
		<View>
			<Comp name={name} size={size} color={color} />
			{notif && (
				<View
					style={{
						width: 5,
						height: 5,
						borderRadius: 50,
						backgroundColor: "#E14E66",
						position: "absolute",
						right: -5,
					}}
				/>
			)}
		</View>
	);
};

const BottomNavigatorConfig = (route, cartCount) => {
	return {
		headerShown: false,
		tabBarStyle: {
			backgroundColor: "#fff",
			position: "absolute",
			// borderTopWidth: 0,
			elevation: 0,
		},
		tabBarShowLabel: false,
		tabBarIcon: ({ focused, color, size }) => {
			if (route.name === "NavigatorCatalog") {
				return focused
					? createIcon(Ionicons, "book-outline", 22, "#51D3B7")
					: createIcon(Ionicons, "book-outline", 22, "#A8A8A8");
			}
			if (route.name === "NavigatorCart") {
				const notif = cartCount > 0 ? true : false;
				return focused
					? createIcon(Feather, "shopping-cart", 22, "#51D3B7", notif)
					: createIcon(Feather, "shopping-cart", 22, "#A8A8A8", notif);
			}
			if (route.name === "NavigatorAccount") {
				return focused
					? createIcon(
							MaterialCommunityIcons,
							"account-circle-outline",
							22,
							"#51D3B7"
					  )
					: createIcon(
							MaterialCommunityIcons,
							"account-circle-outline",
							22,
							"#A8A8A8"
					  );
			}
		},
	};
};

const mapStateToProps = ({ cartData }) => {
	const { cartCount } = cartData;
	return { cartCount };
};
export default connect(mapStateToProps, null)(Navigation);
