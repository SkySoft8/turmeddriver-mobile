import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	fetchProductsData,
	fetchItemProduct,
} from "src/redux/fetch/fetchProductsData";
import { changeProductsType } from "src/redux/slice/productsDataSlice";
import CategorySlider from "./../category-slider";
import ProductList from "../product-list";
import LoadingSpinner from "src/components/loading-spinner";
import { View, Text } from "react-native";

const GetProductList = ({
	navigation,
	productsType,
	productsDataList,
	textSearch,
	productsSortDataList,
	defaultProductsTypes,
	fetchProducts,
	changeType,
	fetchItemProductById,
	loading,
}) => {
	const dataList =
		(textSearch && textSearch.length > 0) ? 
		(productsSortDataList || []) : 
		(productsDataList || []);

	useEffect(() => {
		let objType = {};

		if (productsType) {
			objType.key = productsType.key;
			if (productsType.preferences)
				objType.preferences = productsType.preferences;
			if (productsType.cartCategory)
				objType.cartCategory = productsType.cartCategory;
			if (productsType.cartItemCategory)
				objType.cartItemCategory = productsType.cartItemCategory;
			if (productsType.services) objType.services = productsType.services;
		}

		if (objType.key) {
			fetchProducts(objType);
		}
	}, [productsType]);

	if (!productsType || !defaultProductsTypes) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Загрузка...</Text>
			</View>
		);
	}

	return (
		<>
			<CategorySlider
				defaultProductsTypes={defaultProductsTypes || []}
				changeType={changeType}
				productsType={productsType || {}}
			/>
			{loading && <LoadingSpinner />}
			{!loading && (
				<ProductList
					navigation={navigation}
					productsDataList={dataList}
					fetchItemProductById={fetchItemProductById}
					productsType={productsType}
				/>
			)}
		</>
	);
};

const mapStateToProps = ({ productsData }) => {
	if (!productsData) {
		return {
			productsType: null,
			productsDataList: [],
			textSearch: "",
			productsSortDataList: [],
			defaultProductsTypes: [],
			loading: false,
		};
	}

	const {
		productsType,
		productsDataList = [],
		textSearch = "",
		productsSortDataList = [],
		defaultProductsTypes = [],
		loading = false,
	} = productsData;

	return {
		productsType,
		productsDataList,
		textSearch,
		productsSortDataList,
		defaultProductsTypes,
		loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: (type) => dispatch(fetchProductsData(type)),
		changeType: (type) => dispatch(changeProductsType(type)),
		fetchItemProductById: (id, keyItemType) =>
			dispatch(fetchItemProduct({ id, keyItemType })),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GetProductList);