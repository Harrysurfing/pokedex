import React from "react";
import { connect } from "react-redux";
import {
	selectPokemons,
	selectDataLoaded,
} from "../../redux/load-data/data.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const Modal = ({ pokemonData, dataLoaded, match }) => {
	const id = match.params.id;
	console.log(match);
	console.log(id);
	console.log(pokemonData);
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	const pokemon = pokemonData[id - 1];
	console.log(pokemon);
	return (
		<React.Fragment>
			{dataLoaded ? (
				<div>
					<span className="name-header">
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</span>
					<div className="basic-info-container">
						<div className="picture">
							<img src={imageUrl} alt="pokemon-pic" />
						</div>
						<div className="basic-info">
							<div className="detail-types">
								{pokemon.types.map((item, index) => {
									return <span key={`type${index}`}>{item.type.name}</span>;
								})}
							</div>
							<div className="detail-id">{`#${id}`}</div>
							<div className="detail-base-stats">
								{pokemon.stats.map((item, idx) => {
									return (
										<div key={`stats${idx}`} className="stats-row">
											<span>{item.stat.name}</span>
											<span>{item.base_stat}</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>Data Loading...</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	pokemonData: selectPokemons,
	dataLoaded: selectDataLoaded,
});

export default withRouter(connect(mapStateToProps)(Modal));
