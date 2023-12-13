import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfo.ts";
import tokenReducer from "./userToken.ts";

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		userToken: tokenReducer,
	},
});
