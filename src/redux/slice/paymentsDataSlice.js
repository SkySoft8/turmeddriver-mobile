import { createSlice } from "@reduxjs/toolkit";
import { fetchPaymentsData } from "src/redux/fetch/fetchPayment";
import { fetchCartPayment } from "src/redux/fetch/fetchPayment";
const initialState = {
	paymentsList: [],
	toCartData: "",
	loading: false,
	error: false,
};
const paymentsDataSlice = createSlice({
	name: "paymentsData",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPaymentsData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchPaymentsData.fulfilled, (state, action) => {
				let sortPayment = [...action.payload];
				sortPayment = sortPayment
					.sort(
						(first, second) => Number(second.orderId) - Number(first.orderId)
					)
					.slice(0, 15);
				state.paymentsList = sortPayment;
				state.loading = false;
			})
			.addCase(fetchPaymentsData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				console.log(action.error);
			});
		//////////////
		builder
			.addCase(fetchCartPayment.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(fetchCartPayment.fulfilled, (state, action) => {
				state.toCartData = action.payload;
				state.loading = false;
			})
			.addCase(fetchCartPayment.rejected, (state, action) => {
				console.log(action.error);
				state.error = action.error;
				state.loading = false;
			});
	},
});
const { actions, reducer: paymentsDataReducer } = paymentsDataSlice;

export default paymentsDataReducer;
