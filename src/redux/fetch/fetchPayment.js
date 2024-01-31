import { createAsyncThunk } from "@reduxjs/toolkit";
import ServerAPI from "src/server-API";
import { filterData } from "src/UTILS/filterDataServices";
const connectAPI = new ServerAPI();

export const fetchPaymentsData = createAsyncThunk(
	"payment/paid",
	async (userId) => {
		const res = await connectAPI.getPaymentsData();
		return filterData(res, userId);
	}
);

export const fetchCartPayment = createAsyncThunk(
	"payment/sent",
	async (user_id) => {
		const res = await connectAPI.cartPayment(user_id);
		return res;
	}
);
