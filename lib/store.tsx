import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import employersSliceReducers from "./slices/employerSlice";
import counterSliceReducers from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
        employers: employersSliceReducers,
        counter: counterSliceReducers
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            // [
            jsonPlaceholderApi.middleware,
        // ]
    )
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
