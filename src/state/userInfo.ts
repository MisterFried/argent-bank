import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../types/types";

const initialUser: UserInfo = {
	firstName: "",
	lastName: "",
	email: "",
	id: "",
	createdAt: "",
	updatedAt: "",
};

const userSlice = createSlice({
	name: "userInfo",
	initialState: initialUser,
	reducers: {
		updateUserInfo: (state, actions: PayloadAction<UserInfo>) => {
			state.firstName = actions.payload.firstName;
			state.lastName = actions.payload.lastName;
			state.email = actions.payload.email;
			state.id = actions.payload.id;
			state.createdAt = actions.payload.createdAt;
			state.updatedAt = actions.payload.updatedAt;
		},
		deleteUserInfo: state => {
			state.firstName = "";
			state.lastName = "";
			state.email = "";
			state.id = "";
			state.createdAt = "";
			state.updatedAt = "";
		},
	},
});

export default userSlice.reducer;
export const { updateUserInfo, deleteUserInfo } = userSlice.actions;
