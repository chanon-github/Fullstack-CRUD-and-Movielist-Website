import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alert from "./reducers/alert";
import currentPage from "./reducers/currentPage";
import progress from "./reducers/progress";
export const store = configureStore({
  reducer: {
    // userReducer:user,
    alertReducer: alert,
	currentPageReducer: currentPage,
    progressReducer: progress
 
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
