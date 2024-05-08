import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userName = action.payload.userName;
      state.access_token = action.payload.access_token;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
