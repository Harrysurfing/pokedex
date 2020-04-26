import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=649")
	.then((res) => res.json())
	.then((json) => json.results)
	.then((results) => {
		store.dispatch({ type: "LOAD_DATA", payload: results });
	})
	.catch((error) => {
		throw new Error(error.message);
	});

export default store;
