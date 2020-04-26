import React, { useState } from "react";
import "./page.style.scss";
import { selectSidebarHidden } from "../../redux/sidebar/sidebar.selector";
import { selectPokemons } from "../../redux/load-data/data.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CardList from "../cardlist/cardlist.component";

const Page = ({ sidebarHidden, pokemons }) => {
	const [searchField, setSearchField] = useState("");
	const monsterFilter = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchField.toLowerCase())
	);
	return (
		<div className={`page ${sidebarHidden ? "fullwidth" : "toRight"}`}>
			<div className="page-title">Pokedex.org</div>

			<input
				type="text"
				placeholder="Search for Pokémon"
				spellCheck="false"
				autoCorrect="false"
				autoComplete="off"
				className="search-input"
				onChange={(e) => setSearchField(e.target.value)}
			/>

			<div className="cardlist-container">
				<CardList pokemons={monsterFilter} />
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sidebarHidden: selectSidebarHidden,
	pokemons: selectPokemons,
});

export default connect(mapStateToProps)(Page);
