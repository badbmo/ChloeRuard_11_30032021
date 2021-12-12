import React from "react";
import "../style/home.css";
import Banner from "../components/Banner";
import Background from "../assets/home_banner.png";
import Loader from "../components/Loader";
import RentalsList from "../components/RentalsList";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			data: [],
			error: null,
		};
	}

	/**
	 * fetch data from json file
	 */
	componentDidMount() {
		this.setState({ isLoading: true });
		fetch("./data.json")
			.then((response) => response.json())
			.then((result) => this.setState({ data: result, isLoading: false }))
			.catch((error) => this.setState({ error, isLoading: false }));
	}

	render() {
		const { data, isLoading, error } = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			return <Loader />;
		}

		if (data === undefined) {
			return <Redirect to="/*" />;
		}

		return (
			<main className="home">
				<Banner title="Chez vous, partout et ailleurs" src={Background} alt="paysage de montagnes avec forêt" />
				<RentalsList data={data} />
			</main>
		);
	}
}
