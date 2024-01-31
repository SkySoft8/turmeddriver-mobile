import { createAsyncThunk } from "@reduxjs/toolkit";
import ServerAPI from "src/server-API";
const connectAPI = new ServerAPI();
export const fetchProductsData = createAsyncThunk(
	"product/getProductData",
	async (type) => {
		const res = await connectAPI.getProductsData(type);

		return res;
	}
);

export const fetchItemProduct = createAsyncThunk(
	"product/getItemProductData",
	async ({ id, keyItemType }) => {
		const res = await connectAPI.getItemProduct(id, keyItemType);

		return res;
	}
);

export const fetchGetCommentsProduct = createAsyncThunk(
	"product/getCommentProductData",
	async ({ id, keyItemType, page }) => {
		const res = await connectAPI.getComments(id, keyItemType, page);

		return res;
	}
);

export const fetchSetCommentProduct = createAsyncThunk(
	"product/setCommentProductData",
	async ({ id, keyType, comment }) => {
		const res = await connectAPI.setComment(id, keyType, comment);

		return res;
	}
);

export const fetchGetRoomsProduct = createAsyncThunk(
	"product/getRoomsData",
	async (keyRooms) => {
		const res = await connectAPI.getRooms(keyRooms);

		return res;
	}
);
