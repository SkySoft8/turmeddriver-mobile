import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchUserRegistration } from "src/redux/fetch/fetchUserRegistration";
import { fetchUsersData } from "src/redux/fetch/fetchUser";
import { validation } from "src/UTILS";
import RegistrationVisible from "src/components/screen-account-components/screen-authorization-components/registration/registration-visible";

const Registration = ({
	navigation,
	setRegistrationData,
	getUsers,
	loading,
	usersList,
	isLogged,
}) => {
	const [dataForm, setDataForm] = useState({
		data: { name: "", email: "", password: "", passwordRepeat: "" },
		error: [],
	});

	const [message, setMessage] = useState(null);

	useEffect(() => {
		if (isLogged) {
			setMessage("Добро пожаловать!");
			setTimeout(() => {
				//get users from db and change screen
				getUsers();
				navigation.navigate("AccountScreen");
			}, 1500);
		}
	}, [isLogged]);

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
		const changeState = () => {
			//if have errors - change state
			setDataForm((prev) => ({
				...prev,
				error: validation(data).errors,
			}));
		};

		if (validation(data).hasErrors) {
			changeState();
			return;
		}
		if (usersList) {
			const haveUser = usersList.find((el) => el.email == data.email);
			if (haveUser) {
				setMessage("Такой пользователь существует.");
				setTimeout(() => {
					setMessage(null);
				}, 2000);
				return;
			}
		}
		// else all ok, change state
		changeState();
		setRegistrationData(dataForm);
	};
	return (
		<RegistrationVisible
			loading={loading}
			message={message}
			sentForm={sentForm}
			setData={setData}
			dataForm={dataForm}
		/>
	);
};

const mapStateToProps = ({ usersData }) => {
	const { loading, usersList, isLogged } = usersData;
	return { loading, usersList, isLogged };
};
const mapDispatchToProps = (dispatch) => {
	return {
		setRegistrationData: (newUser) => {
			dispatch(fetchUserRegistration(newUser));
		},
		getUsers: () => dispatch(fetchUsersData()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
