import { createSlice } from '@reduxjs/toolkit';
import { ProductInventory } from './types';

const initialState: ProductInventory = {
	products: [],
	total: 0,
	skip: 0,
	limit: 100,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
});

export default productSlice.reducer;
