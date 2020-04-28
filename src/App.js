import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Page from "./components/page/page.component";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/modal/modal.component";

function App() {
	return (
		<Router>
			<Switch>
				<Provider store={store}>
					<Route
						exact
						path="/"
						render={() => (
							<div className="App">
								<Header />
								<Sidebar />
								<Page />
							</div>
						)}
					/>

					<Route path="/:id" component={Modal} />
				</Provider>
			</Switch>
		</Router>
	);
}

export default App;
