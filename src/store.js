import { configureStore, createSlice } from '@reduxjs/toolkit'

let menuToggle = createSlice({
  name : 'menuToggle',
  initialState : false,
  reducers : {
    onMenuToggle: (state) => !state
  }
})

export default configureStore({
  reducer : {
    menuToggle: menuToggle.reducer
   }
})

export const { onMenuToggle } = menuToggle.actions