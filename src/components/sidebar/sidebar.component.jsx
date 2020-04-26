import Drawer from "@material-ui/core/Drawer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import "./sidebar.style.scss";
import { selectSidebarHidden } from "../../redux/sidebar/sidebar.selector";
import { connect } from "react-redux";

const useStyles = makeStyles({
	list: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	title: {
		height: 64,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 20,
		fontFamily: "Helvetica Neue, Helvetica,Arial,Verdana,Trebuchet MS",
		fontSize: 20,
	},
	divider: {
		marginBottom: 15,
	},

	sideItemButton: {
		fontFamily: "Helvetica Neue, Helvetica,Arial,Verdana,Trebuchet MS",
		fontSize: 14,
		fontWeight: 700,
		textTransform: "none",
		letterSpacing: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	sideItem: {
		padding: "15px 22px",
		height: 50,
		"&:hover": {
			backgroundColor: "#E0E0E0",
			cursor: "pointer",
		},
	},
});

const Sidebar = ({ sidebarHidden }) => {
	const classes = useStyles();

	return (
		<div className="sidebar">
			<Drawer
				variant="permanent"
				anchor={"left"}
				BackdropProps={{ invisible: true }}
			>
				<List
					className={`${classes.list} ${sidebarHidden ? "hidden" : "open"}`}
				>
					<ListItem className={classes.title}>Pokedex.org</ListItem>
					<Divider className={classes.divider} />
					<ListItem className={classes.sideItem}>
						<Button className={classes.sideItemButton}>Pokémon</Button>
					</ListItem>
					<ListItem className={classes.sideItem}>
						<Button className={classes.sideItemButton}>About</Button>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sidebarHidden: selectSidebarHidden(state),
});

export default connect(mapStateToProps)(Sidebar);
