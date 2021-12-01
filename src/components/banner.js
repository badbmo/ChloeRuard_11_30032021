import React from "react";
import "../style/banner.css"

export default class Banner extends React.Component {
	render() {
		return (
			<div className="banner">
				<img className="banner__background" src={this.props.src} alt={this.props.alt} />
			</div>
			
		);
	}
}