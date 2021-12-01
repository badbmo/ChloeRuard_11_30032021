import React from "react";
import "../style/about.css"
import Banner from "../components/banner";
import Background from "../assets/about_banner.png"

export default class About extends React.Component {
	render() {
		return (
			<main className="about">
				<h1 className="about__title">
					Voici la page à propos
				</h1>
				<Banner src={Background} alt="Paysage de montagnes enneigées"/>
			</main>
		);
	}
}