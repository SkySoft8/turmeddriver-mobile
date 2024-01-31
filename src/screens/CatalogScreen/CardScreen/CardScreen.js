import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import HeaderCatalog from "src/components/header-components/header-catalog";

import GetProduct from "src/components/screen-catalog-components/screen-product-components/get-product/get-product";
import { NavigationContext } from "src/context/navigation-context";

const CardScreen = ({ navigation, route }) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.container}
		>
			<HeaderCatalog goBack={true} filter={false} navigation={navigation} />
			<NavigationContext.Provider value={navigation}>
				<GetProduct params={route.params} />
			</NavigationContext.Provider>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		paddingBottom: 70,
	},
});

export default CardScreen;
