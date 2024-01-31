import { createAsyncThunk } from "@reduxjs/toolkit";

import LocalData from "src/data-storage/localData";
import bcrypt from "bcryptjs-react";

import {
	requestAuthorization,
	authorization,
	errorAuthorization,
} from "../slice/usersDataSlice";
const localData = new LocalData();

const fetchSetActiveUser = createAsyncThunk("user/setUser", async (user) => {
	const res = await localData.setUser(user);
	return res;
});

const fetchAuthorizationUser =
	({ email, password }) =>
	() =>
	async (dispatch, getState) => {
		const { usersList } = getState().usersData;
		dispatch(requestAuthorization());

		const checkUser = new Promise((resolve, reject) => {
			const findUser = usersList.find(
				(user) => user.email.toLowerCase() == email.toLowerCase()
			);
			if (findUser) {
				bcrypt.compare(password, findUser.password, function (err, res) {
					if (res) {
						resolve(findUser);
					} else {
						reject("errorAuthData");
					}
				});
			} else {
				reject("errorAuthData");
			}
		});

		await checkUser
			.then((res) => dispatch(authorization(res)))
			.then((setLocalData) =>
				dispatch(fetchSetActiveUser(setLocalData.payload))
			)
			.catch((error) => dispatch(errorAuthorization(error)));
	};

export { fetchAuthorizationUser };
