import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
	openProgress : false,
};
const progressSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		openProgress(state, action) {
            state.openProgress=true

		},
        closeProgress(){
            return initialState;
        }
	}
});

export const {openProgress,closeProgress} = progressSlice.actions;

export default progressSlice.reducer;