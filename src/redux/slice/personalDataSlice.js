import { createSlice } from "@reduxjs/toolkit";

import {
	fetchPersonalData,
	fetchSetPersonalData,
} from "../fetch/fetchPersonalData";

const initialState = {
	personalDataList: {
		surname: "",
		name: "",
		email: "",
		gender: "male",
		date: "",
		phone: "",
		country: "",
		city: "",
	},
	loading: true,
	error: false,
};
const personalDataSlice = createSlice({
	name: "personalData",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPersonalData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchPersonalData.fulfilled, (state, action) => {
				state.loading = false;

				state.personalDataList =
					action.payload == null ? state.personalDataList : action.payload;
			})
			.addCase(fetchPersonalData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				console.log("Error:" + action.error);
			});
		builder
			.addCase(fetchSetPersonalData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSetPersonalData.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(fetchSetPersonalData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				console.log("Error reject personalData:" + action.error);
			});
	},
});

const { actions, reducer: personalDataReducer } = personalDataSlice;

export const {
	personalDataRequest,
	personalDataSuccess,
	personalDataChange,
	personalDataError,
} = actions;

export default personalDataReducer;
