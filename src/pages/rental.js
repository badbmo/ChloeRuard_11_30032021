import React from "react";
import "../style/rental.css";
import Tag from "../components/tag";
import Loader from "../components/Loader";
import Accordion from "../components/accordion";

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
		//const {id} = this.props.match.params.id

		this.setState({ isLoading: true });
		fetch("../data.json")
			.then((response) => response.json())
			.then((result) =>
				this.setState({
					data: result.find(
						(location) =>
							//location.id === this.props.match.params.id
							location.id === "c67ab8a7"
					),
					isLoading: false,
				})
			)
			.catch((error) => this.setState({ error, isLoading: false }));
	}

	render() {
		const { data, isLoading, error } = this.state;
		console.log(this.state.data);
		const { equipments, description, tags } = this.state.data;

		if (error) {
			return <p>{error.message}</p>;
		}

		return (
			<main className="rental">
				<h1 className="rental__title">Voici la page locations</h1>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						{data.id}
						<Tag tags={tags}/>
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
