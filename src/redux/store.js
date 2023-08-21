import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import user from './reducers/user';
import alert from './reducers/alert';
export const store = configureStore({
	reducer: {
        userReducer:user,
        alertReducer:alert
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: ['Promise'],
	// 			ignoredActionPaths: ['payload'],
	// 			ignoredPaths: ['xhr.promises'],
	// 		},
	// 	})
});


