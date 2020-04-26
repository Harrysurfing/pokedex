import React from "react";
import "./card.style.scss";

const Card = ({ name, monsterId, colors }) => {
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monsterId}.png`;

	/*const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${monsterId}.png`;*/

	const checkColor =
		colors.length === 1
			? colors[0]
			: `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
	console.log(checkColor);

	return (
		<div className="card" style={{ background: checkColor }}>
			<img src={imageUrl} alt={monsterId} className="monster-image" />
			<div className="monster-name">
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</div>
		</div>
	);
};

export default Card;
