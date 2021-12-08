import React from "react";
import "../style/rental.css";
import Tag from "../components/Tag";
import Loader from "../components/Loader";
import Accordion from "../components/Accordion";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";

export default class Rental extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			data: [],
			error: null,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		const { id } = this.props.match.params
		fetch("../data.json")
		.then((response) => response.json())
		.then((result) =>
			this.setState({
				data: result.find((location) => location.id === id),
				isLoading: false,
			})
		)
		.catch((error) => this.setState({ error, isLoading: false }));
}
	

	render() {
		const { isLoading, error } = this.state;
		const { pictures, title, host, rating, location, tags, equipments, description } = this.state.data;

		if (error) {
			return <p>{error.message}</p>;
		}

		return (
			<main className="rental">
				{isLoading ? (
					<Loader />
				) : (
					<div>
						<Carousel pictures={pictures} title={title} />

						<div className="info__container">
							<h1>{title}</h1>
							<p>{location}</p>
							<Tag tags={tags} />
						</div>

						<div className="host__container">
							<Host host={host} />
							<Rating rating={rating} />
						</div>

						<div className="accordion__container">
							<Accordion title="Equipements" list={equipments} />
							<Accordion title="Description" text={description} />
						</div>
					</div>
				)}
			</main>
		);
	}
}
