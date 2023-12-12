import { store } from "../state/store";

// Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// User state
export interface User {
	fullname: string;
	lastname: string;
	logged: boolean
}
