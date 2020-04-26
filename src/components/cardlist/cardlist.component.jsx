import React from "react";
import "./cardlist.style.scss";
import Card from "../card/card.component";

const CardList = ({ pokemons }) => {
	return (
		<div className="card-list">
			{pokemons.map((pokemon, index) => (
				<Card key={index} name={pokemon.name} url={pokemon.url} />
			))}
		</div>
	);
};

export default CardList;
