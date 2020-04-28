import React from "react";
import "./card.style.scss";
import { withRouter } from "react-router-dom";
// import sprintf from "sprintf-js";
// const print = sprintf.sprintf;

const Card = ({ name, monsterId, colors, history }) => {
	// const monsterIdPadded = print("%03d", monsterId);
	// const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${monsterIdPadded}.png`;
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${monsterId}.png`;

	/*const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${monsterId}.png`;*/

	const checkColor =
		colors.length === 1
			? colors[0]
			: `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`;

	return (
		<div
			className="card"
			style={{ background: checkColor }}
			onClick={() => history.push(`/${monsterId}`)}
		>
			<img src={imageUrl} alt={monsterId} className="monster-image" />
			<div className="monster-name">
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</div>
		</div>
	);
};

export default withRouter(Card);
