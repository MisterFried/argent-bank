import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialToken = {
	token: "",
};

const tokenSlice = createSlice({
	name: "userToken",
	initialState: initialToken,
	reducers: {
		updateToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		deleteToken: state => {
			state.token = "";
		},
	},
});

export default tokenSlice.reducer;
export const { updateToken, deleteToken } = tokenSlice.actions;
