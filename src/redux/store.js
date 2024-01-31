import { configureStore, combineReducers } from "@reduxjs/toolkit";

import thunkMiddleware from "redux-thunk";
import personalDataReducer from "./slice/personalDataSlice";
import productsDataReducer from "./slice/productsDataSlice";
import productCommentDataReducer from "./slice/productCommentDataSlice";
import productRoomsDataReducer from "./slice/productRoomsDataSlice";
import usersDataReducer from "./slice/usersDataSlice";
import cartDataReducer from "./slice/cartDataSlice";
import paymentsDataReducer from "./slice/paymentsDataSlice";
const reducers = combineReducers({
	personalData: personalDataReducer,
	productsData: productsDataReducer,
	productComment: productCommentDataReducer,
	productRooms: productRoomsDataReducer,
	usersData: usersDataReducer,
	cartData: cartDataReducer,
	paymentsData: paymentsDataReducer,
});
export const store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleware],
});
