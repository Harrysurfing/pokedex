import React from "react";
import "./card.style.scss";

const Card = ({ name, url }) => {
	const monsterId = url
		.replace("https://pokeapi.co/api/v2/pokemon/", "")
		.replace("/", "");

	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monsterId}.png`;

	return (
		<div>
			<img src={imageUrl} alt={monsterId} />
			<div> {name}</div>
		</div>
	);
};

export default Card;
