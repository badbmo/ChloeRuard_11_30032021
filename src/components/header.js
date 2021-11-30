import React from "react";
import {Link, NavLink} from "react-router-dom"
import "../style/header.css";
import Logo from "../assets/logo_pink.svg";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Link to="/">
					<img className="header__logo" src={Logo} alt="logo de Kasa" />
				</Link>
				<nav className="header__nav">
					<NavLink className="nav__home" to="/">
						Accueil
					</NavLink>
					<NavLink className="nav__about" to="/about">
						A Propos
					</NavLink>
				</nav>
			</header>
		);
	}
}