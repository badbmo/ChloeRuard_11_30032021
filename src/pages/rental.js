import React from "react";
import "../style/rental.css";
import Tag from "../components/tag";
import Loader from "../components/Loader";
import Accordion from "../components/accordion";
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
		const url = window.location.pathname;
		this.id = url.split('rental/')[1]
		this.fetchData();
		// normaly would use const {id} = this.props.match.params.id BUT react router V6 components rendered via the element prop
		// (see App.js) don't receive route props (match). Hook and usePrams are mandatory with react V6
		// To keep Class component here (for the exercice), I used Vanilla JS to get the id in the URL.
		// It is not recommended.
	}
		
	fetchData(){
		fetch("../data.json")
		.then((response) => response.json())
		.then((result) =>
			this.setState({
				data: result.find(
					(location) =>
						location.id === this.id
				),
				isLoading: false,
			})
		)
		.catch((error) => this.setState({ error, isLoading: false }));
	}

	render() {
		const {isLoading, error } = this.state;
		console.log(this.state.data);
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

						<Carousel pictures={pictures} title={title}/>

						<div className="info__container">
						<h1>{title}</h1>
						<p>{location}</p>
						<Tag tags={tags}/>
						</div>

						<div className="host__container">
							<Host host={host}/>
							<Rating rating={rating}/>
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
