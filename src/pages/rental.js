import React from "react";
import "../style/rental.css";
//import Tag from "../components/tag";
import Loader from "../components/Loader";

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

		this.setState({ isLoading: true })
    fetch('../data.json')
      .then(response => response.json())
      .then(result => this.setState({ data: result.find((location) => 
					location.id === this.props.match.params.id
				), isLoading: false }))
			.catch(error => this.setState({ error, isLoading: false }));
  }

	render() {
		const {data, isLoading, error } = this.state;
		console.log(this.state.data);
		
    if (error) {
      return <p>{error.message}</p>;
    }

		return (
			<main className="rental">
				<h1 className="rental__title">
					Voici la page locations
				</h1>
				{isLoading ? (
          <Loader/>
      ) : (
				<div>
				{/* {data.tags.map((tag)=>(
					<Tag tag={tag}/>
				))} */}
				{data}
				</div>
			)}				
			</main>
		);
	}
}