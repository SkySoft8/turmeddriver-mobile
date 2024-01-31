import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import RoomsList from "./rooms-list";
import LoadingSpinner from "src/components/loading-spinner";
import { fetchGetRoomsProduct } from "src/redux/fetch/fetchProductsData";

const GetRooms = ({
	keyRooms,
	titleRooms,
	fetchRooms,
	loading,
	roomsList,
	user_id,
	bookingAddServices = null,
}) => {
	useEffect(() => {
		fetchRooms(keyRooms);
	}, []);
	if (loading || roomsList.length == 0) return <LoadingSpinner />;

	//create array with certain  category for hotels
	const filterData = (obj) => {
		const filter = obj.filter((el) => el.user_id === user_id);
		return filter;
	};

	return (
		<RoomsList
			roomsList={filterData(roomsList)}
			bookingAddServices={bookingAddServices}
			titleRooms={titleRooms}
		/>
	);
};
const mapStateToProps = ({ productRooms, productsData }) => {
	const { loading, roomsList } = productRooms;
	const { rooms: keyRooms } = productsData.productsType;
	return { loading, roomsList, keyRooms };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchRooms: (keyRooms) => dispatch(fetchGetRoomsProduct(keyRooms)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(GetRooms);
