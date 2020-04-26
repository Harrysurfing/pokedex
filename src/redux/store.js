import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import LoadDataActionTypes from "../redux/load-data/load-data.type";
import { pokemonTypeColors } from "../constants/pokemon-color";

const url = process.env.REACT_APP_POKEMON_URL;
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

fetch(`${url}/pokemon?offset=0&limit=649`)
	.then((res) => res.json())
	.then((json) => json.results)
	.then((results) => {
		Promise.all(
			results.map((result) =>
				fetch(result.url)
					.then((res) => res.json())
					.then((data) => ({
						...data,
						typeColor: data.types.map(
							(item) => pokemonTypeColors[item.type.name]
						),
					}))
			)
		).then((res) => {
			store.dispatch({
				type: LoadDataActionTypes.LOAD_DATA,
				payload: res,
			});
		});
	});

export default store;
