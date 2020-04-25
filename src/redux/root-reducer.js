import sidebarReducer from "./sidebar/sidebar.reducer";

import { combineReducers } from "redux";

export default combineReducers({
	sidebar: sidebarReducer,
});
