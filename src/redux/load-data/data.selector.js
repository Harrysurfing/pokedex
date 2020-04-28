import { createSelector } from "reselect";

const selectPokemonData = (state) => state.pokemonData;

export const selectPokemons = createSelector(
	selectPokemonData,
	(pokemonData) => pokemonData.pokemons
);

const selectDataLoadComplete = (state) => state.loadDataComplete;

export const selectDataLoaded = createSelector(
	selectDataLoadComplete,
	(dataLoadStatus) => dataLoadStatus.dataLoaded
);
