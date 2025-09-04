import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
  
interface AppState {
  currentPath: string;
  cookieConsent: {
    authentication: boolean;
    preferences: boolean;
    isLoaded: boolean;
  };
}
  
const initialState: AppState = {
  currentPath: "",
  cookieConsent: {
    authentication: false,
    preferences: false,
    isLoaded: false,
  },
};
  
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    setCookieConsent: (state, action: PayloadAction<{
      authentication: boolean;
      preferences: boolean;
    }>) => {
      state.cookieConsent.authentication = action.payload.authentication;
      state.cookieConsent.preferences = action.payload.preferences;
      state.cookieConsent.isLoaded = true;
    },
  },
});
  
export const {
  setCurrentPath,
  setCookieConsent,
} = appSlice.actions;
export default appSlice.reducer;
