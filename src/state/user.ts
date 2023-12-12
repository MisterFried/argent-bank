import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

const initialUser: User = {
	fullname: "",
	lastname: "",
	logged: false,
};

const userSlice = createSlice({
	name: "user",
	initialState: initialUser,
	reducers: {
		login: state => {
			state.fullname = "Tony";
			state.lastname = "Stark";
			state.logged = true;
		},
		changeUserName: state => {
			state.fullname = "Steve";
			state.lastname = "rogers";
		},
		logout: state => {
			state.fullname = "";
			state.lastname = "";
			state.logged = false;
		},
	},
});

export default userSlice.reducer;
export const { login, changeUserName, logout } = userSlice.actions;
