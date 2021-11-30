import React from "react";
import "../style/footer.css";
import Logo from "../assets/logo_white.svg";

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
					<img className="footer__logo" src={Logo} alt="logo de Kasa" />
					<p className="footer__copyright">© 2021 Kasa. All rights reserved</p>
			</footer>
		);
	}
}