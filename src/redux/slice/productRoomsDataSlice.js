import { createSlice } from "@reduxjs/toolkit";

import { fetchGetRoomsProduct } from "../fetch/fetchProductsData";

const initialState = {
	roomsList: [],
	loading: true,
	error: null,
};
const productRoomsDataSlice = createSlice({
	name: "roomsData",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGetRoomsProduct.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(fetchGetRoomsProduct.fulfilled, (state, action) => {
				state.roomsList = action.payload;

				state.loading = false;
			})
			.addCase(fetchGetRoomsProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				console.log("Error reject roomsData:" + action.error);
			});
	},
});

const { actions, reducer: productRoomsDataReducer } = productRoomsDataSlice;

export default productRoomsDataReducer;
