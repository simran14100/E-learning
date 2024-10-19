import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
      loading: false,
    },
    reducers: {
      setUser(state, action) {
        console.log("SETTING USER PROPERTY............", action.payload);
        state.user = action.payload;
      },
      setLoading(state, value) {
        state.loading = value.payload;
      }
      // ...
    },
  });

  export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer