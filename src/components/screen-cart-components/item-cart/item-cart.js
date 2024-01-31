import React, { useState } from "react";

import ItemCartVisible from "./item-cart-visible";
import { connect } from "react-redux";
import { cartChangeChoice } from "src/redux/slice/cartDataSlice";
const ItemCart = ({
	itemCart,
	defaultProductsTypes,
	cartChoiceProduct,
	fetchChangeChoice,
}) => {
	const [showServices, setShowServices] = useState(false);
	//find choice products
	let choice = cartChoiceProduct.indexOf(itemCart);
	const titleCategory = defaultProductsTypes.find(
		(el) => el.role == itemCart.role
	);
	return (
		<ItemCartVisible
			choice={choice}
			itemCart={itemCart}
			titleCategory={titleCategory.title}
			showServices={showServices}
			setShowServices={setShowServices}
			fetchChangeChoice={fetchChangeChoice}
		/>
	);
};

const mapStateToProps = ({ cartData, productsData }) => {
	const { cartChoiceProduct } = cartData;
	const { defaultProductsTypes } = productsData;
	return { cartChoiceProduct, defaultProductsTypes };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchChangeChoice: (product) => dispatch(cartChangeChoice(product)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
