import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gridView: true,
    all_products: [],
    filtered_products: [],
    sort: 'heighest',
    filters: {
      text: '',
      price: 0,
      min_price: 0,
      max_price: 0,
      category: 'all',
      colors: 'all',
      company: 'all',
      shipping: false,
    },
  },
  reducers: {
    setProducts: (state, action) => {
      let amountPrice = action.payload.map((product) => {
        return product.price
      })
      let maxPrice = Math.max(...amountPrice)
      let minPrice = Math.min(...amountPrice)
      state.filters.max_price = maxPrice
      state.filters.min_price = minPrice
      state.filters.price = maxPrice
      state.all_products = [...action.payload]
      state.filtered_products = [...action.payload]
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
      state.filters[name] = value
    },
    filterProducts: (state) => {
      let tempProducts = [...state.all_products]
      const { text, category, colors, company, price, shipping } = state.filters
      //search
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text.toLowerCase())
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
      // shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        )
      }
      // price
      tempProducts = tempProducts.filter((product) => product.price <= price)
      state.filtered_products = tempProducts
    },
    clearFilters: (state) => {
      state.filters = {
        ...state.filters,
        text: '',
        price: state.filters.max_price,
        category: 'all',
        colors: 'all',
        company: 'all',
      }
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
  clearFilters,
} = filterSlice.actions

export default filterSlice.reducer
