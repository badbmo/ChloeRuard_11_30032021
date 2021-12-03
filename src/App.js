import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/style/App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Rental from "./pages/rental";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}>
					</Route>
					<Route path="/about" element={<About />}>
					</Route>
					<Route path="/rental/:id" element={<Rental />}>
					</Route>
					<Route path="/*" element={<Error />}>
					</Route>
				</Routes>
				<Footer />
			</Router>
		);
	}
}
