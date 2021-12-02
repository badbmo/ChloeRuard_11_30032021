import React from "react";
import "../style/about.css"
import Banner from "../components/banner";
import Background from "../assets/about_banner.png"
import Accordion from "../components/accordion";

export default class About extends React.Component {
	render() {
		return (
			<main className="about">
				<Banner src={Background} alt="Paysage de montagnes enneigées"/>
				<Accordion title={titleFiability} content={contentFiability}/>
				<Accordion title={titleRespect} content={contentRespect}/>
				<Accordion title={titleService} content={contentService}/>
				<Accordion title={titleSecurity} content={contentSecurity}/>
			</main>
		);
	}
}

const titleFiability ="Fiabilité"
const contentFiability ="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const titleRespect ="Respect"
const contentRespect ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const titleService ="Service"
const contentService ="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const titleSecurity ="Security"
const contentSecurity ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."