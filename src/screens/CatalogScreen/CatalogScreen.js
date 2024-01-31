import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import HeaderCatalog from "src/components/header-components/header-catalog";
import Filter from "src/components/screen-catalog-components/screen-home-catalog-components/filter";

import GetProductList from "src/components/screen-catalog-components/screen-home-catalog-components/get-product-list/get-product-list";
const CatalogScreen = ({ navigation }) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.container}
		>
			<HeaderCatalog goBack={false} filter={true} navigation={navigation} />
			<GetProductList navigation={navigation} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: { justifyContent: "center", paddingBottom: 50 },
});

export default CatalogScreen;
