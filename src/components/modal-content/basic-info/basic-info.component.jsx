import React from "react";
import "./basic-info.style.scss";

const BasicInfo = ({ pokemon, imageUrl, id }) => {
	return (
		<React.Fragment>
			<span
				className="name-header"
				style={{
					backgroundColor:
						pokemon.typeColor.length === 1
							? pokemon.typeColor[0]
							: pokemon.typeColor[1],
				}}
			>
				{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
			</span>
			<div className="basic-info-container">
				<div className="picture">
					<img src={imageUrl} alt="pokemon-pic" className="pokemon-avatar" />
				</div>
				<div className="basic-info">
					<div className="types-and-num">
						<div className="detail-types">
							{pokemon.types.map((item, index) => {
								return (
									<span
										key={`type${index}`}
										className="types"
										style={{
											backgroundColor: pokemon.typeColor[index],
										}}
									>
										{item.type.name}
									</span>
								);
							})}
						</div>
						<div className="detail-id">{`#${id}`}</div>
					</div>
					<div className="detail-base-stats">
						{pokemon.stats.map((item, idx) => {
							return (
								<div key={`stats${idx}`} className="stats-row">
									<span className="stat-value">{item.stat.name}</span>
									<span className="stat-bar">
										<div
											className="stat-bar-bg"
											style={{
												backgroundColor:
													pokemon.typeColor.length === 1
														? pokemon.typeColor[0]
														: pokemon.typeColor[1],
												transform: `scaleX(${item.base_stat / 200})`,
											}}
										/>
										<div className="stat-bar-fg">{item.base_stat}</div>
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BasicInfo;
