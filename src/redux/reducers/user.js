import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
	currentPage: null // 'Login' , 'Register' , ForgotPwd
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		
	}
});

export const {setCurrentPage} = userSlice.actions;

export default userSlice.reducer;