import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    langDropdownShown: false,
    selectedLangKey: "azeri"
  },
  reducers: {
    showLangDropdown: (state, action) => {
      state.langDropdownShown = action.payload;
    },
   
  },
})

export const { showLangDropdown } = portfolioSlice.actions

export default portfolioSlice.reducer
