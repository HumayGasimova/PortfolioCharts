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
    profileDropdownShown: false,
    menuShown: false,
    selectedLangKey: "azeri",
    portfolioMood: "light",
    messagesHeaderHeight: 0,
    notificationsHeaderHeight: 0,
    profileHeaderHeight: 0,
    fullScreen: false,
    userInfo: {
      fullname: "Petey Cruiser",
      role: "Premium Member"
    },
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
        key: "fullscreen",
        type: "icon",
        name: "faExpand",
        action: ""
    },
    {
        id: 6,
        key: "menu",
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
      state.profileDropdownShown = false;
      state.menuShown = false;
    },
    showMessagesDropdown: (state, action) => {
      state.messagesDropdownShown = action.payload;
      state.langDropdownShown = false;
      state.notificationsDropdownShown = false;
      state.profileDropdownShown = false;
      state.menuShown = false;
    },
    showNotificationsDropdown: (state, action) => {
      state.notificationsDropdownShown = action.payload;
      state.messagesDropdownShown = false;
      state.langDropdownShown = false;
      state.profileDropdownShown = false;
      state.menuShown = false;
    },
    showProfileDropdown: (state, action) => {
      state.profileDropdownShown = action.payload;
      state.notificationsDropdownShown = false;
      state.messagesDropdownShown = false;
      state.langDropdownShown = false;
      state.menuShown = false;
    },
    showMenu: (state, action) => {
      state.menuShown = action.payload;
      state.profileDropdownShown = false;
      state.notificationsDropdownShown = false;
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
      state.toolbarItems.splice(moodIndex, 1, mood);
    },
    setMessagesHeaderHeight: (state, action) => {
      state.messagesHeaderHeight = action.payload;
    },
    setNotificationsHeaderHeight: (state, action) => {
      state.notificationsHeaderHeight = action.payload;
    },
    setProfileHeaderHeight: (state, action) => {
      state.profileHeaderHeight = action.payload;
    },
    setFullScreen: (state, action) => {
      state.fullScreen = action.payload;

      let fullScreen = state.toolbarItems.find(item => item.key === "fullscreen") as ToolbarItem;
      let fullScreenIndex =  state.toolbarItems.findIndex(item => item.key === "fullscreen");
      fullScreen = {
        ...fullScreen,
        name: action.payload ? "faCompress" : "faExpand",
      }
      
      state.toolbarItems.splice(fullScreenIndex, 1, fullScreen);
    },
    startClickingMessagesIcon: (state) => {},
    startClickingNotificationsIcon: (state) => {},
    startClickingProfileIcon: (state) => {}
  },
})

export const { 
  showLangDropdown, 
  showMessagesDropdown, 
  showNotificationsDropdown,
  showProfileDropdown,
  showMenu,
  setPortfolioLang, 
  setPortfolioMood, 
  setMessagesHeaderHeight,
  setNotificationsHeaderHeight,
  setProfileHeaderHeight,
  startClickingMessagesIcon, 
  startClickingNotificationsIcon,
  startClickingProfileIcon,
  setFullScreen
} = portfolioSlice.actions

export default portfolioSlice.reducer
