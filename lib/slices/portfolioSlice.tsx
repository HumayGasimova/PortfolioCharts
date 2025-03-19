import { createSlice } from '@reduxjs/toolkit';

type ToolbarItem = {
  id: number,
  key: string,
  type: string,
  name: string,
  action: string
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    langDropdownShown: false,
    selectedLangKey: "azeri",
    portfolioMood: "light",
    toolbarItems: [
      {
        id: 1,
        key: "lang",
        type: "img",
        name: "",
        action: ""
    },
    {
        id: 2,
        key: "mood",
        type: "icon",
        name: "faMoon",
        action: "light"
    },
    {
        id: 3,
        key: "messages",
        type: "icon",
        name: "faEnvelope",
        action: ""
    },
    {
        id: 4,
        key: "notifications",
        type: "icon",
        name: "faBell",
        action: ""
    },
    {
        id: 5,
        key: "zoom",
        type: "icon",
        name: "faExpand",
        action: ""
    },
    {
        id: 6,
        key: "allNotifications",
        type: "icon",
        name: "faBars",
        action: ""
    },
    {
        id: 7,
        key: "profile",
        type: "img",
        name: "",
        action: ""
    },
    {
        id: 8,
        key: "settings",
        type: "icon",
        name: "faGear",
        action: "spin"
    },
    ]
  },
  reducers: {
    showLangDropdown: (state, action) => {
      state.langDropdownShown = action.payload;
    },
    setPortfolioLang: (state, action) => {
      state.selectedLangKey = action.payload;
    },
    setPortfolioMood: (state, action) => {
      console.log(action.payload)
      let mood = state.toolbarItems.find(item => item.key === "mood") as ToolbarItem;
      let moodIndex =  state.toolbarItems.findIndex(item => item.key === "mood");
      mood = {
        ...mood,
        name: action.payload === "light" ? "faMoon" : "faSun",
        action: action.payload
      }
      
      state.portfolioMood = action.payload;
      state.toolbarItems.splice(1,moodIndex,mood);
    },
  },
})

export const { showLangDropdown, setPortfolioLang, setPortfolioMood } = portfolioSlice.actions

export default portfolioSlice.reducer
