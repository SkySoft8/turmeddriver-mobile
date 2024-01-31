import React, { useState } from "react";
import { connect } from "react-redux";
import OrderItemContentVisible from "./order-item-content-visible";
const OrderItemContent = ({ item, defaultProductsTypes, promocode }) => {
	const [showServices, setShowServices] = useState(false);
	const changeShowServices = (value) => {
		setShowServices(value);
	};

	const { role, products } = item;

	const category = defaultProductsTypes.find((el) => el.role == role);

	const productsInfo = JSON.parse(products);
	const getDate = (date) => {
		const newDate = (oldValue) => oldValue.split(" ").join(".");
		if (date != "-") return { dateStart: newDate(date), dateEnd: null };
		return {
			dateStart: newDate(productsInfo.date[0]),
			dateEnd: newDate(productsInfo.date[1]),
		};
	};

	return (
		<OrderItemContentVisible
			showServices={showServices}
			changeShowServices={changeShowServices}
			category={category.title}
			order={item}
			productsInfo={productsInfo}
			getDate={getDate}
			promocode={promocode}
		/>
	);
};

const mapStateToProps = ({ productsData }) => {
	const { defaultProductsTypes } = productsData;
	return { defaultProductsTypes };
};
export default connect(mapStateToProps, null)(OrderItemContent);
