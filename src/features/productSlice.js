import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { all_products_url as url } from '../utils/constants'
import axios from 'axios'

export const getProducts = createAsyncThunk('getProducts', async () => {
  const response = await axios(url)
  return response.data
})

export const getSingleProduct = createAsyncThunk(
  'getSingleProduct',
  async (url) => {
    const response = await axios(url)
    return response.data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isSidebarOpen: false,
    isLoading: false,
    products: [],
    single_product: {},
  },
  reducers: {
    // sidebar toggle
    openSidebar: (state) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false
    },
  },
  extraReducers: {
    // all products fetching
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
    },
    // single products fetching
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false
      state.single_product = action.payload
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export const { openSidebar, closeSidebar } = productSlice.actions

export default productSlice.reducer
