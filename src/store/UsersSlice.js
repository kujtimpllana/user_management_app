import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    addUserToStart: (state, action) => {
      state.list.unshift(action.payload); //add at the start of the list but now using Redux instead of locally manipulating with useState() hook
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userToBeUpdated = state.list.find((user) => user.id === id);
      if (userToBeUpdated) {
        userToBeUpdated.name = name;
        userToBeUpdated.email = email;
      }
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    setAllUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addUserToStart, updateUser, deleteUser, setAllUsers } =
  userSlice.actions;
export default userSlice.reducer;
