import React from "react";
import "../style/carousel.css";
import Arrow from "../assets/arrow_icon.svg";

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
		};

		 this.nextImage = this.nextImage.bind(this)
		 this.previousImage = this.previousImage.bind(this)
	}

	render() {
		const { index } = this.state;
		if (this.props.pictures) {
			const totalPictures = this.props.pictures.length;
			return (
				<section className="carousel">
					<img src={this.props.pictures[index]} alt={this.props.title} className="carousel___image" />
					<span className="carousel__page">
						{index +1}/{totalPictures}
					</span>
					{totalPictures > 1 ? (
						<div>
							<img className="carousel__arrow-left" src={Arrow} alt="arrow previous" onClick={this.previousImage} />
							<img className="carousel__arrow-right" src={Arrow} alt="arrow next" onClick={this.nextImage} />
						</div>
					) : (
						<div></div>
					)}
					{/* {this.renderArrows} */}
				</section>
			);
		} else {
			return <section className="carousel"></section>;
		}
	}

	// renderArrows() {
	// 	const totalPictures = this.props.pictures.length;
	// 	if (totalPictures > 1) {
	// 		return (
	// 			<div>
	// 				<img className="carousel__arrow-left" src={Arrow} alt="arrow previous" onClick={this.previousImage()} />
	// 				<img className="carousel__arrow-right" src={Arrow} alt="arrow next" onClick={this.previousImage()} />
	// 			</div>
	// 		);
	// 	} else {
	// 		return <div></div>;
	// 	}
	// }

	nextImage() {
		const { index } = this.state;
		const totalPictures = this.props.pictures.length;
		if (index === totalPictures -1) {
			this.setState({ index: 0 });
		} else {
			this.setState({ index: index + 1 });
		}
	}

	previousImage() {
		const { index } = this.state;
		const totalPictures = this.props.pictures.length;
		this.setState({ index: index === 0 ? totalPictures - 1 : index - 1 });
	}
}
