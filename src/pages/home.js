import React from "react";
import "../style/home.css"
import Tag from "../components/tag";
import Banner from "../components/banner";
import Background from "../assets/home_banner.png";

export default class Home extends React.Component {
	render() {
		return (
			<main className="home">
				<h1 className="home__title">
					Voici la page accueil
				</h1>
				<Banner src={Background} alt="paysage de montagnes avec forêt"/>
				<Tag/>
			</main>
		);
	}
}