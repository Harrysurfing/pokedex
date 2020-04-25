import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Sidebar />
			</div>
		</Provider>
	);
}

export default App;
