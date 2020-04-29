import React from "react";
import { connect } from "react-redux";
import {
	selectPokemons,
	selectDataLoaded,
} from "../../redux/load-data/data.selector";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "./modal.style.scss";
import BasicInfo from "../modal-content/basic-info/basic-info.component";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Spring } from "react-spring/renderprops";
import Profile from "../modal-content/profile/profile.component";

const Modal = ({ pokemonData, dataLoaded, match, history }) => {
	const id = match.params.id;
	if (id < 1 || id > 649) {
		return (
			<Link to="/">
				Looks like you don't know what you're looking for, click to go back...
			</Link>
		);
	}
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	const pokemon = pokemonData[id - 1];

	return (
		<React.Fragment>
			{dataLoaded ? (
				<div
					className="page-container"
					style={{
						background:
							pokemon.typeColor.length === 1
								? pokemon.typeColor[0]
								: `linear-gradient(90deg, ${pokemon.typeColor[0]} 50%, ${pokemon.typeColor[1]} 50%)`,
					}}
				>
					<IconButton
						size="medium"
						className="back-button"
						onClick={() => history.push("/")}
					>
						<ArrowBackIcon size="inherit" className="arrow" />
					</IconButton>
					<Spring
						from={{ opacity: 0, marginTop: 1000 }}
						to={{ opacity: 1, marginTop: 58 }}
					>
						{(props) => (
							<div className="info-container" style={props}>
								<BasicInfo imageUrl={imageUrl} pokemon={pokemon} id={id} />
								<Profile pokemon={pokemon} />
							</div>
						)}
					</Spring>
				</div>
			) : (
				<div className="loading">
					<CircularProgress />
					<span>Data Loading....</span>
				</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	pokemonData: selectPokemons,
	dataLoaded: selectDataLoaded,
});

export default withRouter(connect(mapStateToProps)(Modal));
