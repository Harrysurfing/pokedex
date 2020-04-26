import LoadDataActionTypes from "./load-data.type";

const INITIAL_STATE = {
	pokemons: [],
};

const loadDataReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LoadDataActionTypes.LOAD_DATA:
			return { ...state, pokemons: payload };
		default:
			return state;
	}
};

export default loadDataReducer;
