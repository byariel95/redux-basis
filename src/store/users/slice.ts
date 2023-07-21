import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export type UserId = string;

export interface userWithId extends User {
	id: UserId;
}

const initialState: userWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "yazmanito@gmail.com",
		github: "midudev",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "lena@gmail.com",
		github: "lena",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "phil@gmail.com",
		github: "philless",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
