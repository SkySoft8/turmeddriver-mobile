import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersData } from "src/redux/fetch/fetchUser";

import ServerAPI from "src/server-API";
const connectAPI = new ServerAPI();

export const fetchUserRegistration = createAsyncThunk(
	"user/registration",
	async (newUser) => {
		const res = connectAPI.userRegistration(newUser);
		return res;
	}
);
