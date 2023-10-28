import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    dataUser: {
      email: "",
    },
    token: "",
    isAuth: false,
  },
  reducers: {
    onLogin: (state, action) => {
      const user = action.payload.user;

      state.token = action.payload.token;
      state.dataUser = {
        email: user.id_profile.email,
      };
      state.isAuth = true;
    },
    onLogout: (state) => {
      state.dataUser = {
        name: "",
        lastName: "",
        email: "",
      };
      state.isAuth = false;
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout } = authSlice.actions;
