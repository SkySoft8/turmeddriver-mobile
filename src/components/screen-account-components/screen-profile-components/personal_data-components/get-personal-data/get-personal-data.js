import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchPersonalData } from "src/redux/fetch/fetchPersonalData";
import { fetchDeleteActiveUser } from "src/redux/fetch/fetchUser";

import LoadingSpinner from "src/components/loading-spinner";

import ViewPersonalData from "../view-personal-data";
const GetPersonalData = ({
	personalDataList,
	loading,
	error,
	fetchPersonalData,
	logOut,
	clearCart,
}) => {
	// useEffect(() => {
	// 	fetchPersonalData();
	// }, []);

	if (loading) return <LoadingSpinner />;

	return (
		<ViewPersonalData personalDataList={personalDataList} logOut={logOut} />
	);
};

const mapStateToProps = ({ personalData, usersData }) => {
	// const { personalDataList, loading, error } = personalData;
	const { activeUser: personalDataList, loading, error } = usersData;

	return { personalDataList, loading, error };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchPersonalData: () => dispatch(fetchPersonalData("1")),
		logOut: () => dispatch(fetchDeleteActiveUser()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(GetPersonalData);
