import React from "react";
import "../style/home.css"
import Tag from "../components/tag";

export default class Home extends React.Component {
	render() {
		return (
			<main className="home">
				<h1 className="home__title">
					Voici la page accueil
				</h1>
				<Tag/>
			</main>
		);
	}
}