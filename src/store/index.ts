import {
  configureStore,
} from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import referenceReducer from "./slices/referenceSlice";

export const store = configureStore({
  reducer: {
    reference: referenceReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
