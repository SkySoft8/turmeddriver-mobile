import React, {
	useState,
	useImperativeHandle,
	forwardRef,
	useCallback,
} from "react";

import AdditServicesVisible from "../addit-services-visible";
const AdditServices = ({ changeTotal, bookingAddServices, roomData }, ref) => {
	const { cartCategory, cartItemCategory } = bookingAddServices;

	//crate new array in init state with new field *count*, and replace field price
	let cartItemInitial = [
		...cartItemCategory.map((item) => ({
			...item,
			["price"]:
				item["price"] == "бесплатно" ? "0" : item["price"].replace("р", ""),
			["count"]: 0,
		})),
	];

	const [services, setServices] = useState({
		cartItemCategory: cartItemInitial,
	});

	const returnAdditServicesState = () => {
		//id user added services (count>1),then creatind array with this services
		let newServices = services.cartItemCategory.filter((el) => el.count != 0);
		if (roomData) {
			//if have roomData then first fields on array object data roomData
			const { id, title, price } = roomData;
			return [{ id: 0, title, price, count: 0 }, ...newServices];
		}
		if (newServices.length == 0) return [];

		return newServices;
	};

	useImperativeHandle(ref, () => ({ returnAdditServicesState }));

	const setStateServices = (cartItem, ind) => {
		changeTotal(ind * cartItem.price);
		const itemIndex = services.cartItemCategory.findIndex(
			({ id }) => id == cartItem.id
		);
		const newItem = { ...cartItem, count: cartItem.count + ind };
		setServices((prev) => ({
			cartItemCategory: [
				...prev.cartItemCategory.slice(0, itemIndex),
				newItem,
				...prev.cartItemCategory.slice(itemIndex + 1),
			],
		}));
	};

	const changeServices = useCallback((cartItem, ind) => {
		if (ind == 1 && cartItem.count != 9) {
			setStateServices(cartItem, ind);
		}
		if (ind == -1 && cartItem.count != 0) {
			setStateServices(cartItem, ind);
		}
	}, []);

	return (
		<AdditServicesVisible
			cartCategory={cartCategory}
			cartItemCategory={services.cartItemCategory}
			changeServices={changeServices}
		/>
	);
};

export default forwardRef(AdditServices);
