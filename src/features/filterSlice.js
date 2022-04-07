import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gridView: true,
  },
  reducers: {
    setGridView: (state) => {
      state.gridView = true
    },
    setListView: (state) => {
      state.gridView = false
    },
  },
})

export const { setGridView, setListView } = filterSlice.actions

export default filterSlice.reducer
