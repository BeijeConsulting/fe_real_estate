import React, { Component } from "react";

import { Navigate, Link } from "react-router-dom";

class SignUpBusiness extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				vatNumber: "",
				businessName: "",
				address: "",
				email: "",
				password: "",
			},
			errors: {
				vatNumber: "",
				businessName: "",
				address: "",
				email: "",
				password: "",
			},
			redirectToLogin: false,
		};
	}

	// Navigation

	redirectToLogin = () => {
		this.setState({
			redirectToLogin: true,
		});
	};

	// Data handlers

	onChangeVatNumber = (e) => {
		this.setState({
			data: { ...this.state.data, cf: e.target.value },
		});
	};

	onChangeBusinessName = (e) => {
		this.setState({
			data: { ...this.state.data, name: e.target.value },
		});
	};

	onChangeAddress = (e) => {
		this.setState({
			data: { ...this.state.data, surname: e.target.value },
		});
	};

	onChangeEmail = (e) => {
		this.setState({
			data: { ...this.state.data, email: e.target.value },
		});
	};

	onChangePassword = (e) => {
		this.setState({
			data: { ...this.state.data, password: e.target.value },
		});
	};

	onClickSignUp = (e) => {
		e.preventDefault();

		this.redirectToLogin();
	};

	render() {
		return (
			<form className="flex flex-col justify-evenly items-center">
				<input
					placeholder="partita iva"
					type="text"
					onChange={this.onChangeVatNumber}
				/>

				<input
					placeholder="business name"
					type="text"
					onChange={this.onChangeBusinessName}
				/>

				<input
					placeholder="indirizzo"
					type="text"
					onChange={this.onChangeAddress}
				/>

				<input
					placeholder="email"
					type="email"
					onChange={this.onChangeEmail}
				/>
				<input
					placeholder="password"
					type="password"
					onChange={this.onChangePassword}
				/>

				<button onClick={this.onClickSignUp}>Registrati</button>

				<p>Hai un account?</p>
				<Link to={"/auth/login"}>Effettua il login</Link>
				{this.state.redirectToLogin && (
					<Navigate to={"/auth/login"} />
				)}
			</form>
		);
	}
}

export default SignUpBusiness;
