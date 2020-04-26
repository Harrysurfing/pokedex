import sidebarReducer from "./sidebar/sidebar.reducer";
import loadDataReducer from "./load-data/load-data.reducer";

import { combineReducers } from "redux";

export default combineReducers({
	sidebar: sidebarReducer,
	pokemonData: loadDataReducer,
});
