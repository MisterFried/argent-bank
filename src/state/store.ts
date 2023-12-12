import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../state/user.ts";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
