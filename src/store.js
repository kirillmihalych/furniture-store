import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/productSlice'
import filterReducer from './features/filterSlice'
import cartReducer from './features/cartSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
})
