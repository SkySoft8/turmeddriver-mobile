import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TabView } from "react-native-tab-view";
import PromoCodesOrderList from "../promo_codes-components/promo_codes-order-list";
import PersonalData from "../personal_data-components/personal-data";
import THEME from "src/THEME/index";

const TabsProfile = ({ changeActiveTab, accessEdit, changeAccessEdit }) => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{
			key: "personalData",
			title: "Личные данные",
		},
		{
			key: "promoCodes",
			title: "Промокоды",
		},
	]);
	const renderScene = ({ route }) => {
		switch (route.key) {
			case "personalData":
				return (
					<PersonalData
						accessEdit={accessEdit}
						changeAccessEdit={changeAccessEdit}
					/>
				);
			case "promoCodes":
				return <PromoCodesOrderList />;
			default:
				return null;
		}
	};
	const renderTabBar = (props) => {
		return (
			<View style={styles.tabBar}>
				{props.navigationState.routes.map((route, i) => {
					let bgc = i === index ? THEME.colors.title : "#fff";
					let colorText = i === index ? "#fff" : THEME.colors.title;
					return (
						<TouchableOpacity
							key={i}
							style={[
								styles.tabTouch,
								{
									backgroundColor: bgc,
								},
							]}
							onPress={() => {
								setIndex(i);
								changeActiveTab(i);
							}}
						>
							<Text style={[styles.tabText, { color: colorText }]}>
								{route.title}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onIndexChange={setIndex}
				style={styles.tabView}
				// initialLayout={{ width: Dimensions.get("window").width }}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
	},
	tabBar: {
		flexDirection: "row",
	},
	tabView: {
		flex: 1,
		// height: 220,
		marginTop: 20,
	},
	tabTouch: {
		flex: 1,
		alignItems: "center",
		padding: 16,
		borderBottomWidth: 1.5,
		borderBottomColor: THEME.colors.title,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3,
	},
	tabText: {
		fontFamily: THEME.font.InterMedium,
		fontSize: 16,
	},
});
export default TabsProfile;
