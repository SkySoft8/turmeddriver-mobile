import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import Navigation from "src/navigation";
import { fetchUsersData, fetchGetActiveUser } from "src/redux/fetch/fetchUser";
import { clearCart } from "src/redux/slice/cartDataSlice";
import { fetchGetCart } from "src/redux/fetch/fetchCart";
import { IsLogged } from "src/context/isLogged";

const MainContent = ({
	fetchUsers,
	fetchActiveUser,
	getCart,
	activeUser,
	isLogged,
	clearCart,
	usersList,
	linking,
}) => {
	useEffect(() => {
		//get all users
		fetchUsers();
		//check and get in local data is active user
		// fetchActiveUser();
	}, []);
	useEffect(() => {
		if (usersList.length > 1) {
			//check and get in local data is active user
			fetchActiveUser();
		}
	}, [usersList]);

	useEffect(() => {
		if (isLogged) {
			//get cart
			getCart(activeUser.id);
		} else {
			clearCart();
		}
	}, [isLogged]);

	return (
		<>
			<IsLogged.Provider value={isLogged}>
				<Navigation linking={linking} />
			</IsLogged.Provider>
			<StatusBar
				animated={true}
				barStyle="dark-content"
				backgroundColor="#fff"
				translucent={false}
			/>
		</>
	);
};
const mapStateToProps = ({ usersData }) => {
	const { isLogged, activeUser, usersList } = usersData;
	return { isLogged, activeUser, usersList };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsersData()),
		fetchActiveUser: () => dispatch(fetchGetActiveUser()),
		getCart: (userId) => dispatch(fetchGetCart(userId)),
		clearCart: () => dispatch(clearCart()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
