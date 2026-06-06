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
	try {
		const res = await localData.setUser(user);
		return res;
	} catch (error) {
		throw new Error("Failed to save user locally");
	}
});

const fetchAuthorizationUser =
	({ email, password }) =>
	() =>
	async (dispatch, getState) => {
		dispatch(requestAuthorization());
		
		try {
			const state = getState();
			const usersList = state.usersData?.usersList || [];
			
			if (!Array.isArray(usersList)) {
				throw new Error("Users list is not available");
			}

			const findUser = usersList.find((user) => 
				user?.email?.toLowerCase() === email?.toLowerCase()
			);
			
			if (!findUser) {
				throw new Error("errorAuthData");
			}

			const isPasswordValid = await new Promise((resolve, reject) => {
				bcrypt.compare(password, findUser.password, function (err, res) {
					if (err) {
						reject(err);
					} else {
						resolve(res);
					}
				});
			});

			if (isPasswordValid) {
				dispatch(authorization(findUser));
				await dispatch(fetchSetActiveUser(findUser));
			} else {
				throw new Error("errorAuthData");
			}
			
		} catch (error) {
			const errorMessage = error.message || "Authorization failed";
			dispatch(errorAuthorization(errorMessage));
		}
	};

export { fetchAuthorizationUser };