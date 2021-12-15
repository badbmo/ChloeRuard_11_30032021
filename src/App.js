import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../src/style/App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Rental from "./pages/rental";
import Error from "./pages/error";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route path="/rental/:id" render={(props) => <Rental {...props} />}></Route>
					<Route path="/*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		);
	}
}
