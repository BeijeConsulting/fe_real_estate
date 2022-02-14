import React, { Component } from "react";

import { Navigate, Link } from "react-router-dom";

class SignUpPrivate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				cf: "",
				name: "",
				surname: "",
				username: "",
				email: "",
				password: "",
			},
			errors: {
				cf: "",
				name: "",
				surname: "",
				username: "",
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

	onChangeCF = (e) => {
		this.setState({
			data: { ...this.state.data, cf: e.target.value },
		});
	};

	onChangeName = (e) => {
		this.setState({
			data: { ...this.state.data, name: e.target.value },
		});
	};

	onChangeSurname = (e) => {
		this.setState({
			data: { ...this.state.data, surname: e.target.value },
		});
	};

	onChangeUsername = (e) => {
		this.setState({
			data: { ...this.state.data, username: e.target.value },
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
					placeholder="cf"
					type="text"
					onChange={this.onChangeCF}
				/>

				<input
					placeholder="name"
					type="text"
					onChange={this.onChangeName}
				/>

				<input
					placeholder="surname"
					type="text"
					onChange={this.onChangeSurname}
				/>

				<input
					placeholder="username"
					type="text"
					onChange={this.onChangeUsername}
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

export default SignUpPrivate;
