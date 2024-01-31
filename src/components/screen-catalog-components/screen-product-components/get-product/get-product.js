import React from "react";
import { connect } from "react-redux";

import ProductItem from "../product-item";
import LoadingSpinner from "src/components/loading-spinner";

const GetProduct = ({ loading, productData, productsType }) => {
	if (loading || productData.productItem.length == 0) {
		return <LoadingSpinner />;
	}

	return <ProductItem productData={productData} productsType={productsType} />;
};

const mapStateToProps = ({ productsData }) => {
	const {
		loading,
		productItem,
		productsType,
		preferences,
		cartCategory,
		cartItemCategory,
		services,
	} = productsData;
	const productData = {
		productItem,
		preferences,
		cartCategory,
		cartItemCategory,
		services,
	};

	return {
		loading,
		productData,
		productsType,
	};
};

export default connect(mapStateToProps, null)(GetProduct);
