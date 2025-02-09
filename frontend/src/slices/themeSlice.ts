import { createSlice } from "@reduxjs/toolkit";

const updateTheme = (newState: string) => {
  if (newState === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", JSON.stringify(newState));
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", JSON.stringify(newState));
  }
};

const initialState =
localStorage.theme && JSON.parse(localStorage.theme) === "dark"
    ? "dark"
    : localStorage.theme && JSON.parse(localStorage.theme) === "light"
    ? "light"
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

updateTheme(initialState);

const authSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      const newState = state === "dark" ? "light" : "dark";
      updateTheme(newState);
      return newState;
    },
  },
});

export const { setTheme } = authSlice.actions;
export default authSlice.reducer;
