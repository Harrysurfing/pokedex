import { createSelector } from "reselect";

const selectPokemonData = (state) => state.pokemonData;

export const selectPokemons = createSelector(
	selectPokemonData,
	(pokemonData) => pokemonData.pokemons
);
