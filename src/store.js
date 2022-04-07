import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/productSlice'
import filterReducer from './features/filterSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
  },
})
