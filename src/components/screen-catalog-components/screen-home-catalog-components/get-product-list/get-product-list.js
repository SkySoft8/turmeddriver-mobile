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
		textSearch.length > 0 ? productsSortDataList : productsDataList;

	useEffect(() => {
		//Set object with config keys for api
		let objType = {};

		objType.key = productsType.key;
		if (productsType.preferences)
			objType.preferences = productsType.preferences;
		if (productsType.cartCategory)
			objType.cartCategory = productsType.cartCategory;
		if (productsType.cartItemCategory)
			objType.cartItemCategory = productsType.cartItemCategory;
		if (productsType.services) objType.services = productsType.services;

		fetchProducts(objType);
	}, [productsType]);

	return (
		<>
			<CategorySlider
				defaultProductsTypes={defaultProductsTypes}
				changeType={changeType}
				productsType={productsType}
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
	const {
		productsType,
		productsDataList,
		textSearch,
		productsSortDataList,
		defaultProductsTypes,
		loading,
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
