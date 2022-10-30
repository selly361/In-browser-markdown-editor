import { createSlice } from "@reduxjs/toolkit";

const preferedTheme = matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const getTheme = () => localStorage.getItem("theme") || preferedTheme;

const initialState = {
  theme: getTheme(),
  sideBarsOpen: false,
  previewsOpen: false,
  modal: {
    type: "",
    open: false,
  },
};

const helperSlice = createSlice({
  name: "helper",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sideBarsOpen = !state.sideBarsOpen;
    },

    togglePreview: (state) => {
      state.previewsOpen = !state.previewsOpen;
    },

    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },

    openModal: (state, action) => {
      state.modal = {
        open: true,
        type: action.payload,
      };
    },

    closeModal: (state) => {
      state.modal = {
        type: "",
        open: false,
      };
    },
  },
});


export const { closeModal, togglePreview, toggleSidebar, toggleTheme, openModal } = helperSlice.actions
export default helperSlice.reducer


