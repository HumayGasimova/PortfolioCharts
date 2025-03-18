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
    setPortfolioLang: (state, action) => {
      state.selectedLangKey = action.payload;
    },
  },
})

export const { showLangDropdown, setPortfolioLang } = portfolioSlice.actions

export default portfolioSlice.reducer
