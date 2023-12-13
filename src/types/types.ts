import { store } from "../state/store";

// Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// User state
export interface UserInfo {
	firstName: string;
	lastName: string;
	email: string;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface returnType {
	token: string;
	error: undefined | string;
}
