import React, { useState } from "react";
import "./moves.style.scss";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Moves = ({ pokemon }) => {
	const [accordionShow, setAccordionShow] = useState(
		pokemon.moves.map(() => false)
	);
	return (
		<div className="moves-container">
			<span
				className="moves-header"
				style={{
					background:
						pokemon.typeColor.length === 1
							? pokemon.typeColor[0]
							: pokemon.typeColor[1],
				}}
			>
				Moves
			</span>
			<div className="moves-details">
				{pokemon.moves.map((item, idx) => (
					<div key={idx} className="moves-row">
						<strong className="move-number">Move{idx + 1}:</strong>
						<span className="move-name">{item.move.name}</span>
						<div className="drop-icon">
							<ExpandMoreIcon />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Moves;
