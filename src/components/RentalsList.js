import React from "react";
import "../style/rentalsList.css";
import { Link } from "react-router-dom";
import Thumb from "./Thumb";

export default class RentalsList extends React.Component {
	render() {
		if (this.props.data) {
			return (
				<section className="rentalsList">
					{this.props.data.map((rental) => (
						<Link key={rental.id} to={`/rental/${rental.id}`}>
							<Thumb title={rental.title} cover={rental.cover} />
						</Link>
					))}
				</section>
			);
		} else {
			<section className="rentalsList"></section>;
		}
	}
}
