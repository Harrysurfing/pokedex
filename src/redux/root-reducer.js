import sidebarReducer from "./sidebar/sidebar.reducer";
import {
	loadDataReducer,
	loadCompleteReducer,
} from "./load-data/load-data.reducer";

import { combineReducers } from "redux";

export default combineReducers({
	sidebar: sidebarReducer,
	pokemonData: loadDataReducer,
	loadDataComplete: loadCompleteReducer,
});
