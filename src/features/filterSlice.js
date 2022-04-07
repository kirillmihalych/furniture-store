import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gridView: true,
  },
  reducers: {},
})

// export const {} = filterSlice.actions

export default filterSlice.reducer
