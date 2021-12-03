import React from "react";
import "../style/home.css"
import Banner from "../components/banner";
import Background from "../assets/home_banner.png";
import Loader from "../components/Loader";
import RentalsList from "../components/RentalsList";

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
		this.setState({ isLoading: true })
    fetch('./data.json')
      .then(response => response.json())
      .then(result => this.setState({ data: result, isLoading: false }))
			.catch(error => this.setState({ error, isLoading: false }));
  }

	render() {
		const { data, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

		return (
			<main className="home">
				<h1 className="home__title">
					Chez vous, partout et ailleurs
				</h1>
				<Banner src={Background} alt="paysage de montagnes avec forêt"/>

				{isLoading ? (
          <Loader/>
      ) : (
				<RentalsList data={data}/>)}
			</main>
		);
	}
}