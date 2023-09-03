import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),

    reducer: {
        user: userSlice,
    },

});
