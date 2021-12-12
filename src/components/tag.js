import React from "react";
import "../style/tag.css";

export default class Tag extends React.Component {
	render() {
		if (this.props.tags) {
			return (
				<div className="tag__container">
					{this.props.tags.map((tag) => (
						<div className="tag__box" aria-label="Tag" key={tag}>
							<span className="tag__content">{tag}</span>
						</div>
					))}
				</div>
			);
		} else {
			return <div className="tag__container"></div>;
		}
	}
}
