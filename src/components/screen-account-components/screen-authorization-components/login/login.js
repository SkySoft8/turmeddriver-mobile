import React, { useEffect, useState } from "react";

import { validation } from "src/UTILS";

import { fetchAuthorizationUser } from "src/redux/fetch/fetchUserAuthorization";
import LoginVisible from "./login-visible";
import { connect } from "react-redux";
const Login = ({
	fetchAuthorization,
	loading,
	activeUser,
	isLogged,
	errorAuth,
	navigation,
}) => {
	const initState = {
		data: {
			email: "",
			password: "",
		},
		error: [],
	};

	const [dataForm, setDataForm] = useState(initState);
	const setData = (keyData, value) => {
		//set data on key field
		setDataForm((prev) => ({
			...prev,
			data: {
				...dataForm.data,
				[keyData]: value,
			},
		}));
	};

	const sentForm = (data) => {
		//if have errors - change state
		if (validation(data).hasErrors) {
			setDataForm((prev) => ({
				...prev,
				error: validation(data).errors,
			}));
			return;
		}
		// else all ok, change state
		setDataForm((prev) => ({
			...prev,
			error: validation(data).errors,
		}));

		fetchAuthorization(dataForm.data);
	};

	return (
		<LoginVisible
			dataForm={dataForm}
			setData={setData}
			sentForm={sentForm}
			errorAuth={errorAuth}
			isLogged={isLogged}
			activeUser={activeUser}
			navigation={navigation}
			loading={loading}
		/>
	);
};

const mapStateToProps = ({ usersData }) => {
	const { activeUser, isLogged, error, loading } = usersData;
	const { authorization: errorAuth } = error;
	return { activeUser, isLogged, errorAuth, loading };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAuthorization: (data) => dispatch(fetchAuthorizationUser(data)()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
