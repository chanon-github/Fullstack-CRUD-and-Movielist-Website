import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
	currentPage: null // 'Login' , 'Register' , ForgotPwd
};
const currentPage = createSlice({
	name: 'currentPage',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload.currentPage;
		},
		
	}
});

export const {setCurrentPage} = currentPage.actions;

export default currentPage.reducer;