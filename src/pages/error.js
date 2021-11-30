import React from "react";
import { Link } from "react-router-dom";
import "../style/error.css"

export default class Error extends React.Component {
	render() {
		return (
			<main className="error">
				<h1 className="error__title">
					404
				</h1>
				<p className="error__info">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<Link className="error__link" to="/">
					Retourner sur la page d'acceuil
				</Link>
			</main>
		);
	}
}