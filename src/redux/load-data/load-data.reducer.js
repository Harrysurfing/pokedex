import LoadDataActionTypes from "./load-data.type";

const INITIAL_STATE = {
	pokemons: [],
};

export const loadDataReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LoadDataActionTypes.LOAD_DATA:
			return { ...state, pokemons: payload };
		default:
			return state;
	}
};

const LOAD_DATA_INITIAL_STATE = {
	dataLoaded: false,
};

export const loadCompleteReducer = (
	state = LOAD_DATA_INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case LoadDataActionTypes.LOAD_COMPLETE:
			return { ...state, dataLoaded: true };
		default:
			return state;
	}
};
