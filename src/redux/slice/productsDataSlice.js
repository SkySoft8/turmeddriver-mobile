import { createSlice } from "@reduxjs/toolkit";
import {
	fetchProductsData,
	fetchItemProduct,
} from "../fetch/fetchProductsData";
const initialState = {
	productsDataList: [],
	productsSortDataList: [],
	textSearch: "",
	productItem: [],
	preferences: [],
	cartCategory: [],
	cartItemCategory: [],
	services: [],
	defaultProductsTypes: [
		{
			id: "0",
			title: "Медицинские центры",
			key: "medicals",
			keyItem: "medicals",
			preferences: "medicalAction",
			cartCategory: "list",
			cartItemCategory: "item",
			role: "Мед.центр",
		},
		{
			id: "1",
			title: "Курорты/Санатории",
			key: "sanatoriums",
			keyItem: "sanatorium",
			preferences: "sanatoriumAction",
			cartCategory: "sanatoriumLists",
			cartItemCategory: "sanatoriumItems",
			services: "sanatoriumServic",
			rooms: "sanatoriumPost",
			role: "sanatorium",
		},
		{
			id: "2",
			title: "Бьюти/SPA",
			key: "spa",
			keyItem: "spa",
			preferences: "spaAction",
			cartCategory: "spalists",
			cartItemCategory: "spaitems",
			role: "spa",
		},
		{
			id: "3",
			title: "Отели",
			key: "hostels",
			keyItem: "hostel",
			preferences: "hostelAction",
			services: "hostelServic",
			rooms: "hostelPost",
			role: "hostel",
		},
		{
			id: "4",
			title: "Туроператоры",
			key: "turs",
			keyItem: "tur",
			preferences: "turAction",
			services: "turServic",
			rooms: "turPost",
			role: "tur",
		},
		{
			id: "5",
			title: "Спорт",
			key: "sports",
			keyItem: "sport",
			preferences: "sportAction",
			cartCategory: "sportLists",
			cartItemCategory: "sportItems",
			services: "sportServic",
			rooms: "sportPost",
			role: "sport",
		},
		{
			id: "6",
			title: "Кафе",
			key: "cafes",
			keyItem: "cafe",
			preferences: "cafeAction",
			cartCategory: "cafelists",
			cartItemCategory: "cafeitems",
			role: "cafe",
		},
	],
	productsType: {
		id: "0",
		title: "Медицинские центры",
		key: "medicals",
		keyItem: "medicals",
		preferences: "medicalAction",
		cartCategory: "list",
		cartItemCategory: "item",
		role: "Мед.центр",
	},
	loading: true,
	error: {
		allProducts: null,
		itemProduct: null,
	},
};
const productsDataSlice = createSlice({
	name: "productsData",
	initialState: initialState,
	reducers: {
		changeProductsType: (state, action) => {
			state.productsType = action.payload;
		},
		sortDataList: (state, action) => {
			const sortData = state.productsDataList.filter(
				(item) =>
					item.address.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
			);

			state.textSearch = action.payload;
			state.productsSortDataList = sortData;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsData.pending, (state) => {
				state.error.allProducts = null;
				state.loading = true;
			})
			.addCase(fetchProductsData.fulfilled, (state, action) => {
				for (key in action.payload) {
					state[key] = action.payload[key];
				}
				state.productsSortDataList = [];
				state.textSearch = "";
				state.loading = false;
			})
			.addCase(fetchProductsData.rejected, (state, action) => {
				state.loading = false;
				state.error.allProducts = action.error;
				console.log(action.error);
			});
		//
		builder
			.addCase(fetchItemProduct.pending, (state) => {
				state.error.itemProduct = null;
				state.productItem = [];
				state.loading = true;
			})
			.addCase(fetchItemProduct.fulfilled, (state, action) => {
				state.productItem = action.payload;
				state.loading = false;
			})
			.addCase(fetchItemProduct.rejected, (state, action) => {
				state.loading = false;
				state.error.itemProduct = action.error;
				console.log(action.error);
			});
	},
});

const { actions, reducer: productsDataReducer } = productsDataSlice;

export const { changeProductsType, sortDataList } = actions;

export default productsDataReducer;
