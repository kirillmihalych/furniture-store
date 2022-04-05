import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false
    },
  },
})

export const { openSidebar, closeSidebar } = productSlice.actions

export default productSlice.reducer
