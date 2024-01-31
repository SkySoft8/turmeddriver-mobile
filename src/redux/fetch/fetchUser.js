import { createAsyncThunk } from "@reduxjs/toolkit";
import ServerAPI from "src/server-API";
import LocalData from "src/data-storage/localData";

const connectAPI = new ServerAPI();
const localData = new LocalData();

//users
const fetchUsersData = createAsyncThunk("user/getAllUsersData", async () => {
	const res = await connectAPI.getUsersData();
	return res;
});

const fetchSetUserData = createAsyncThunk(
	"user/setUsersData",
	async ({ user_id, personalData }) => {
		const {
			surname,
			name,
			email,
			gender,
			age,
			phone,
			user_district,
			user_city,
		} = personalData;
		const configObject = {
			...personalData,
			name: name.length < 1 ? "-" : name,
			surname: surname.length < 1 ? "-" : surname,
			age: Number(age) < 1 ? 0 : Number(age),
			gender: gender.length < 1 ? "men" : gender,
			user_city: user_city.length < 1 ? "-" : user_city,
			user_district: user_district.length < 1 ? "-" : user_district,
			phone: String(phone).length < 1 ? "0" : phone,
		};
		const res = await connectAPI
			.setUserData(user_id, configObject)
			.then(async (res) => {
				await localData.mergeUser(res);
				return res;
			});

		return res;
	}
);

//active user
const fetchGetActiveUser = createAsyncThunk("user/getUser", async () => {
	const res = await localData.getUser();

	return res;
});

const fetchDeleteActiveUser = createAsyncThunk("user/deleteUser", async () => {
	const res = await localData.removeUser();
	return res;
});

export {
	fetchUsersData,
	fetchSetUserData,
	fetchGetActiveUser,
	fetchDeleteActiveUser,
};
