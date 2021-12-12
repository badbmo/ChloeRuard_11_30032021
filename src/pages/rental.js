import React from "react";
import "../style/rental.css";
import Tag from "../components/Tag";
import Loader from "../components/Loader";
import Accordion from "../components/Accordion";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class Rental extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			data: {},
			error: null,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		const { id } = this.props.match.params;
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
		const { data, isLoading, error } = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			<Loader />;
		}

		if (data === undefined) {
			return <Redirect to="/*" />;
		}

		const { pictures, title, host, rating, location, tags, equipments, description } = this.state.data;

		return (
			<main className="rental">
				<Carousel pictures={pictures} title={title} />

				<section className="info__container">
					<div className="rental__container">
						<h1 className="rental__title">{title}</h1>
						<p className="rental__location">{location}</p>
						<Tag tags={tags} />
					</div>

					<div className="host__container">
						<Host host={host} />
						<Rating rating={rating} />
					</div>
				</section>

				<div className="rentalContent__container">
					<Accordion title="Equipements" list={equipments} />
					<Accordion title="Description" text={description} />
				</div>
			</main>
		);
	}
}
