import React from "react";
import "./profile.style.scss";

const Profile = ({ pokemon }) => {
	return (
		<div className="profile-container">
			<span
				className="profile-header"
				style={{
					background:
						pokemon.typeColor.length === 1
							? pokemon.typeColor[0]
							: pokemon.typeColor[1],
				}}
			>
				Profile
			</span>
			<div className="monster-profile-row">
				<strong className="profile-attr">Weigth:</strong>
				<span className="profile-number">{pokemon.weight / 10} kg</span>

				<strong className="profile-attr">Heigth:</strong>
				<span className="profile-number">{pokemon.height / 10} m</span>
			</div>
			<div className="monster-profile-row">
				{pokemon.abilities.map((item, idx) => (
					<React.Fragment key={item.ability.name}>
						<strong className="profile-attr">Ability {idx + 1}: </strong>
						<span className="profile-number">{item.ability.name}</span>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Profile;
