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
    messagesDropdownShown: false,
    notificationsDropdownShown: false,
    selectedLangKey: "azeri",
    portfolioMood: "light",
    messagesHeaderHeight: 0,
    notificationsHeaderHeight: 0,
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
      state.messagesDropdownShown = false;
      state.notificationsDropdownShown = false;
    },
    showMessagesDropdown: (state, action) => {
      state.messagesDropdownShown = action.payload;
      state.langDropdownShown = false;
      state.notificationsDropdownShown = false;
    },
    showNotificationsDropdown: (state, action) => {
      state.notificationsDropdownShown = action.payload;
      state.messagesDropdownShown = false;
      state.langDropdownShown = false;
    },
    setPortfolioLang: (state, action) => {
      state.selectedLangKey = action.payload;
    },
    setPortfolioMood: (state, action) => {
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
    setMessagesHeaderHeight: (state, action) => {
      state.messagesHeaderHeight = action.payload;
    },
    setNotificationsHeaderHeight: (state, action) => {
      state.notificationsHeaderHeight = action.payload;
    },
    startClickingMessagesIcon: (state) => {},
    startClickingNotificationsIcon: (state) => {}
  },
})

export const { 
  showLangDropdown, 
  showMessagesDropdown, 
  showNotificationsDropdown, 
  setPortfolioLang, 
  setPortfolioMood, 
  setMessagesHeaderHeight,
  setNotificationsHeaderHeight,
  startClickingMessagesIcon, 
  startClickingNotificationsIcon 
} = portfolioSlice.actions

export default portfolioSlice.reducer
