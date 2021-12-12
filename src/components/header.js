import React from "react";
import { Link, NavLink } from "react-router-dom";
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
					<NavLink exact className="nav__home" activeClassName="nav__home-active" to="/">
						Accueil
					</NavLink>
					<NavLink exact className="nav__about" activeClassName="nav__home-active" to="/about">
						A Propos
					</NavLink>
				</nav>
			</header>
		);
	}
}
