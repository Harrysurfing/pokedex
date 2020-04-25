import SidebarActionTypes from "./sidebar.type";

const INITIAL_STATE = {
	hidden: true,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SidebarActionTypes.TOOGLE_SIDE_BAR:
			return { ...state, hidden: !state.hidden };
		default:
			return state;
	}
};

export default sidebarReducer;
