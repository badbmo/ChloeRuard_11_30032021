import React from "react";
import "../style/thumb.css";

export default class Thumb extends React.Component {
	render() {
		return (
			<article className="thumb">
				<img src={this.props.cover} alt={this.props.title} className="thumb__cover" />
				<h2 className="thumb__title">{this.props.title}</h2>
			</article>
		);
	}
}
