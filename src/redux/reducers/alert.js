import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
	openModal : false,
    modalMessage : '',
    alertSeverity : ''
};
const alertSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		openModal(state, action) {
            state.openModal=true,
            state.modalMessage=action.payload.message,
            state.alertSeverity=action.payload.alertSeverity

		},
        closeModal(){
            return initialState;

        }
		
	}
});

export const {openModal,closeModal} = alertSlice.actions;

export default alertSlice.reducer;