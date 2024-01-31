import { createSlice } from "@reduxjs/toolkit";

import {
	fetchUsersData,
	fetchGetActiveUser,
	fetchDeleteActiveUser,
	fetchSetUserData,
} from "../fetch/fetchUser";
import { fetchUserRegistration } from "src/redux/fetch/fetchUserRegistration";
const initialState = {
	usersList: [],
	activeUser: null,
	loading: false,
	isLogged: false,
	error: {
		getUsers: null,
		authorization: null,
		registration: null,
	},
};
const usersDataSlice = createSlice({
	name: "usersData",
	initialState: initialState,
	reducers: {
		requestAuthorization: (state) => {
			state.loading = true;
			state.error.authorization = null;
		},
		authorization: (state, action) => {
			state.isLogged = true;
			state.activeUser = action.payload;
			state.loading = false;
		},
		errorAuthorization: (state, action) => {
			state.loading = false;
			state.error.authorization = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersData.pending, (state, action) => {
				state.error.getUsers = null;
			})
			.addCase(fetchUsersData.fulfilled, (state, action) => {
				state.usersList =
					action.payload == null ? initialState : action.payload;

				state.loading = false;
			})
			.addCase(fetchUsersData.rejected, (state, action) => {
				state.loading = false;

				state.error.getUsers = action.error;
				console.log("Error usersDataSlice:" + action.error);
			});
		//////////////////

		builder
			.addCase(fetchSetUserData.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchSetUserData.fulfilled, (state, action) => {
				state.activeUser = action.payload;

				state.loading = false;
			})
			.addCase(fetchSetUserData.rejected, (state, action) => {
				console.log(action.error);
			});

		/////////////////
		builder.addCase(fetchGetActiveUser.fulfilled, (state, action) => {
			if (action.payload != null) {
				//we are use local data for ID!! and when we can take active user, we are get id and push on this id user from database (may be change on site)
				// console.log(state.usersList);
				const getUser = (state.activeUser = state.usersList.find(
					(user) => user.id == action.payload.id
				));
				for (let key in getUser) {
					if (getUser[key] === "-" || getUser[key] === 0) {
						getUser[key] = "";
					}
				}
				state.activeUser = getUser;
				// state.activeUser.age =
				// 	Number(state.activeUser.age) < 1 ? "" : state.activeUser.age;
				state.isLogged = true;
			}
		});

		builder.addCase(fetchDeleteActiveUser.fulfilled, (state, action) => {
			state.isLogged = false;
			state.activeUser = null;
		});

		/////////////////

		builder
			.addCase(fetchUserRegistration.pending, (state, action) => {
				state.loading = true;
				state.error.registration = null;
			})
			.addCase(fetchUserRegistration.fulfilled, (state, action) => {
				usersDataSlice.caseReducers.authorization(state, action);
				state.loading = false;
			})
			.addCase(fetchUserRegistration.rejected, (state, action) => {
				state.loading = false;

				state.error.registration = action.error;
				console.log(action.error);
			});
	},
});
const { actions, reducer: usersDataReducer } = usersDataSlice;
export const {
	requestAuthorization,
	authorization,
	errorAuthorization,
	logOut,
} = actions;
export default usersDataReducer;
