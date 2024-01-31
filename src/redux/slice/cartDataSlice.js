import { createSlice } from "@reduxjs/toolkit";
import {
	fetchAddToCart,
	fetchGetCart,
	fetchRemoveFromCart,
} from "src/redux/fetch/fetchCart";

const initialState = {
	cartDataList: [],
	cartTotal: 0,
	cartTotalPay: 0,
	cartCount: 0,
	cartChoiceProduct: [],
	cartChoiceCount: 0,

	loading: false,
	error: null,
};
const cartDataSlice = createSlice({
	name: "cartData",
	initialState: initialState,
	reducers: {
		cartChangeChoice: (state, action) => {
			const product = action.payload;
			const { cartChoiceCount, cartChoiceProduct } = state;

			if (cartChoiceCount == 0) {
				state.cartChoiceProduct = [...state.cartChoiceProduct, product];
				state.cartChoiceCount = cartChoiceCount + 1;
			} else {
				const findEl = cartChoiceProduct.find((el) => el.id == product.id);
				if (findEl) {
					const itemIndex = cartChoiceProduct.findIndex(
						(el) => el.id == product.id
					);
					state.cartChoiceProduct = [
						...cartChoiceProduct.slice(0, itemIndex),
						...cartChoiceProduct.slice(itemIndex + 1),
					];
					state.cartChoiceCount = cartChoiceCount - 1;
				} else {
					state.cartChoiceProduct = [...state.cartChoiceProduct, product];
					state.cartChoiceCount = cartChoiceCount + 1;
				}
			}
		},
		clearCart: (state, action) => {
			state.cartDataList = [];
			state.cartTotal = 0;
			state.cartTotalPay = 0;
			state.cartCount = 0;
			state.cartChoiceProduct = [];
			state.cartChoiceCount = 0;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGetCart.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchGetCart.fulfilled, (state, action) => {
				state.cartDataList = action.payload;
				state.cartCount = action.payload.length;
				state.cartChoiceProduct = [];
				state.cartChoiceCount = 0;
				const orderTotal = action.payload.reduce((prev, total) => {
					return prev + total.total_price;
				}, 0);

				state.cartTotal = orderTotal;
				state.cartTotalPay = orderTotal * 0.1;
				state.loading = false;
			})
			.addCase(fetchGetCart.rejected, (state, action) => {
				console.log(action.error);
			});
		builder
			.addCase(fetchAddToCart.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchAddToCart.fulfilled, (state, action) => {
				// state.cartDataList = [action.payload, ...state.cartDataList];
			})
			.addCase(fetchAddToCart.rejected, (state, action) => {
				state.cartDataList = [];
				state.error = action.error;
				state.loading = false;
				console.log(action.error);
			});
		builder
			.addCase(fetchRemoveFromCart.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchRemoveFromCart.fulfilled, (state, action) => {
				// const { cartChoiceProduct, cartChoiceCount, cartCount, cartTotal } =
				// 	state;
				// const removeCount = cartChoiceCount;
				// const removeTotal = cartChoiceProduct.reduce(
				// 	(prev, next) => (prev = prev + next.total_price),
				// 	0
				// );
				// const newCartList = state.cartDataList.reduce((array, item) => {
				// 	const el = cartChoiceProduct.find((el) => el.id == item.id);
				// 	if (!el) array.push(item);
				// 	return array;
				// }, []);
				// state.cartDataList = [...newCartList];
				// state.cartCount = cartCount - removeCount;
				// state.cartTotal = cartTotal - removeTotal;
				// state.cartTotalPay = (cartTotal - removeTotal) * 0.1;
				// state.cartChoiceCount = 0;
				// state.loading = false;
			})
			.addCase(fetchRemoveFromCart.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
				console.log(action.error);
			});
	},
});

const { actions, reducer: cartDataReducer } = cartDataSlice;

export const { cartChangeChoice, clearCart } = actions;

export default cartDataReducer;
