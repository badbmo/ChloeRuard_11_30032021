import React from "react";
import "../style/host.css";

export default class Host extends React.Component {
	render() {
		if(this.props.host){
		return (
			<article className="host">
				<span className="host__name">{this.props.host.name.split(" ")[0]}<br />{this.props.host.name.split(" ")[1]}</span>
        <img src={this.props.host.picture} alt={`${this.props.host.name}`} className="host__picture"/>
			</article>
		)}else{
			return(
				<article className="host"></article>
			)
		};
	}
}