import { createSlice } from '@reduxjs/toolkit'
// import { useDispatch, useSelector } from 'react-redux'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gridView: true,
    all_products: [],
    filtered_products: [],
    sort: '',
  },
  reducers: {
    setProducts: (state, action) => {
      state.all_products = action.payload
      state.filtered_products = action.payload
    },
    setGridView: (state) => {
      state.gridView = true
    },
    setListView: (state) => {
      state.gridView = false
    },
    setSort: (state, action) => {
      const { value } = action.payload
      state.sort = value
      console.log(state.sort)
    },
    sortProducts: (state) => {
      if (state.sort === 'heighest') {
        state.filtered_products = state.filtered_products.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (state.sort === 'lowest') {
        state.filtered_products = state.filtered_products.sort((a, b) => {
          return a.price - b.price
        })
      }
      if (state.sort === 'a') {
        state.filtered_products = state.filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name) - b.name.localeCompare(a.name)
        })
      }
      if (state.sort === 'z') {
        state.filtered_products = state.filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name) - a.name.localeCompare(b.name)
        })
      }
    },
  },
})

export const { setGridView, setListView, setProducts, setSort, sortProducts } =
  filterSlice.actions

export default filterSlice.reducer
