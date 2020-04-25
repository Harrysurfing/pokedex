import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { selectSidebarHidden } from "../../redux/sidebar/sidebar.selector";
import { toogleSidebar } from "../../redux/sidebar/sidbar.action";
import "./header.style.scss";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		height: 64,
	},
	appbar: {
		backgroundColor: "rgb(160, 64, 160)",
	},
	toolbar: {
		paddingLeft: 15,
	},
	button: {
		padding: 5,
	},

	icon: {
		color: "white",
	},
}));

const Header = ({ sidebarHidden, toogleSidebar }) => {
	const classes = useStyles();

	return (
		<div className={`${classes.root} ${sidebarHidden ? "full" : "toright"}`}>
			<AppBar position="static" className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
					<IconButton className={classes.button} onClick={toogleSidebar}>
						<MenuIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sidebarHidden: selectSidebarHidden(state),
});

const mapDispatchToProps = (dispatch) => ({
	toogleSidebar: () => dispatch(toogleSidebar()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
