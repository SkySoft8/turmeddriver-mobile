import { createSlice } from "@reduxjs/toolkit";

import {
	fetchGetCommentsProduct,
	fetchSetCommentProduct,
	rerenderFetchGetCommentsProduct,
} from "./../fetch/fetchProductsData";

const initialState = {
	commentList: [],
	pages: 1,
	current_page: 1,
	loading: true,
	error: null,
};
const productCommentDataSlice = createSlice({
	name: "commentData",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGetCommentsProduct.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(fetchGetCommentsProduct.fulfilled, (state, action) => {
				state.commentList = action.payload.data;
				state.pages = action.payload.meta.last_page;
				state.current_page = action.payload.meta.current_page;
				state.loading = false;
			})
			.addCase(fetchGetCommentsProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				console.log("Error reject getCommentData:");
				console.log(action.error);
			});
		//
		builder

			.addCase(fetchSetCommentProduct.fulfilled, (state, action) => {})
			.addCase(fetchSetCommentProduct.rejected, (state, action) => {
				state.error = action.error;
				console.log("Error reject setCommentData:");
				console.log(action.error);
			});
	},
});

const { actions, reducer: productCommentDataReducer } = productCommentDataSlice;

export default productCommentDataReducer;
