import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface ReferenceState {
  hasUnsavedChanges: boolean;
  lastSavedContent: string;
  currentContent: string;
}

const initialState: ReferenceState = {
  hasUnsavedChanges: false,
  lastSavedContent: "",
  currentContent: "",
};

const referenceSlice = createSlice({
  name: "reference",
  initialState,
  reducers: {
    setCurrentContent: (state, action: PayloadAction<string>) => {
      state.currentContent = action.payload;
      state.hasUnsavedChanges = state.currentContent !== state.lastSavedContent;
    },
    setSavedContent: (state, action: PayloadAction<string>) => {
      state.lastSavedContent = action.payload;
      state.currentContent = action.payload;
      state.hasUnsavedChanges = false;
    },
    resetReferenceState: (state) => {
      state.hasUnsavedChanges = false;
      state.lastSavedContent = "";
      state.currentContent = "";
    },
  },
});

export const {
  setCurrentContent, setSavedContent, resetReferenceState,
} = referenceSlice.actions;
export default referenceSlice.reducer;
