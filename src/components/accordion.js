import React from "react";
import "../style/accordion.css"
import Arrow from "../assets/arrow_icon.svg";

export default class Accordion extends React.Component {
	render() {
		return (
		<details className="accordion">
			<summary className="accordion__title">
				{this.props.title}
				<img className="accordion__arrow" src={Arrow} alt="arrow icon"/>
			</summary>
			{this.renderContent()}
		</details>
			
		);
	}

	renderContent(){
		if (this.props.text){
			return(
		<p className="accordion__content">{this.props.text}</p>)}
		if (this.props.list){
			return(
				<ul className="accordion__content">
					{this.props.list.map((element)=>
					<li>{element}</li>
					)}
				</ul>
			)
		}
	}
	
}