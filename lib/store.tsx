import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import employersSliceReducers from "./slices/employerSlice";
import counterSliceReducers from "./slices/counterSlice";
import portfolioReducer from "./slices/portfolioSlice";
import messagesReducer from "./slices/messagesSlice";
import notificationsReducer from "./slices/notificationsSlice";

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import * as Epic from './epics'

const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
    Epic.startClickingMessagesIconEpic,
    Epic.startClickingNotificationsIconEpic
  );

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
        employers: employersSliceReducers,
        counter: counterSliceReducers,
        portfolio: portfolioReducer,
        messages: messagesReducer,
        notifications: notificationsReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
        [
            jsonPlaceholderApi.middleware,
            epicMiddleware
        ]
    )
});

epicMiddleware.run(rootEpic);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
// export default store;
