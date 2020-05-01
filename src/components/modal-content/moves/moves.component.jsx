import React, { useState } from "react";
import "./moves.style.scss";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Moves = ({ pokemon }) => {
	const [accordionShow, setAccordionShow] = useState(
		pokemon.moves.map(() => false)
	);

	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

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
							<ExpandMoreIcon
								className={accordionShow[idx] ? "less-icon" : "more-icon"}
								onClick={() => {
									let NewAccordion = accordionShow;
									NewAccordion[idx] = !NewAccordion[idx];
									// console.log(NewAccordion);
									setAccordionShow(NewAccordion);
									//console.log(Object.is(accordionShow, NewAccordion));
									forceUpdate();
								}}
							/>
						</div>
						<div className="drop-info">
							{accordionShow[idx] ? (
								<React.Fragment>
									Learn through method:
									{item.version_group_details[0].move_learn_method.name}
									<br />
									Learn at Level:
									{item.version_group_details[0].level_learned_at}
								</React.Fragment>
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Moves;
