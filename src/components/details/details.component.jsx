import React from "react";
import { withRouter } from "react-router-dom";
import "./details.style.scss";
import Modal from "../modal/modal.component";

const Details = () => {
	return (
		<div>
			<Modal id="1" />
		</div>
	);
};

export default withRouter(Details);
