import { createSlice } from '@reduxjs/toolkit'
// import { useDispatch, useSelector } from 'react-redux'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gridView: true,
    all_products: [],
    filtered_products: [],
    sort: '',
    filters: {
      text: '',
      category: 'all',
      colors: 'all',
      company: 'all',
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.all_products = action.payload
      state.filtered_products = action.payload
    },
    // sort functional
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
    // filters functional
    setFilter: (state, action) => {
      const { name, value } = action.payload
      console.log(name, value)
      state.filters[name] = value
    },
    filterProducts: (state, action) => {
      let tempProducts = [...state.all_products]
      const { text, category, colors, company } = state.filters
      //search
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
      }
      //categories
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        )
      }
      //comapnies
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        )
      }
      //colors
      if (colors !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((color) => color === colors)
        })
      }
      state.filtered_products = tempProducts
    },
  },
})

export const {
  setGridView,
  setListView,
  setProducts,
  setSort,
  sortProducts,
  setFilter,
  filterProducts,
} = filterSlice.actions

export default filterSlice.reducer
