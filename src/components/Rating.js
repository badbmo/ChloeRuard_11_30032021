import React from "react";
import "../style/rating.css";
import FullStar from "../assets/star_pink_icon.svg"
import EmptyStar from "../assets/star_grey_icon.svg"

export default class Rating extends React.Component {
	render() {
		return (
			<div className="rating">
				{this.renderStar()}
			</div>
		);
	}

	renderStar() {
		const ratingMax = 5;
		const ratingCurrent = parseInt(this.props.rating);
		const rating = [];
		for(let i=0; i<= ratingMax; i++) {
			rating.push(<img src={i<= ratingCurrent? FullStar : EmptyStar} alt="rating" className="rating__star" key={i}/>)			
		}
		return rating;
	}
}
