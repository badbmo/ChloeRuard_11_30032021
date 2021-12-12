import React from "react";
import "../style/banner.css";

export default class Banner extends React.Component {
	renderTitle() {
		if (this.props.title) {
			return <h1 className="hero__title">{this.props.title}</h1>;
		}
	}

	render() {
		return (
			<div className="hero">
				{this.renderTitle()}
				<div className="banner">
					<img className="banner__background" src={this.props.src} alt={this.props.alt} />
				</div>
			</div>
		);
	}
}
