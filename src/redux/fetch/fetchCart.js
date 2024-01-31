import { createAsyncThunk } from "@reduxjs/toolkit";
import ServerAPI from "src/server-API";
import { filterData } from "src/UTILS/filterDataServices";
const connectAPI = new ServerAPI();

export const fetchGetCart = createAsyncThunk("cart/getCart", async (userId) => {
	const res = await connectAPI.getCart();
	return filterData(res, userId);
});

export const fetchAddToCart = createAsyncThunk(
	"cart/addToCart",
	async (product) => {
		const res = await connectAPI.setToCart(product);
		return res;
	}
);

export const fetchRemoveFromCart = createAsyncThunk(
	"cart/removeFromCart",
	async (products) => {
		const res = await connectAPI.removeFromCart(products);
		return res;
	}
);
