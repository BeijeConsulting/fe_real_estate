import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../../redux/ducks/userMeDuck";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				email: "",
				password: "",
			},
			rememberMe: false,
			errors: {
				email: "",
				password: "",
			},
		};
	}

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

	onChangeRememberMe = () => {
		this.setState({ rememberMe: !this.state.rememberMe });
	};

	onClickLogin = (e) => {
		e.preventDefault();

		this.props.dispatch(
			setUser({ ...this.state.data, password: undefined })
		);
	};

	render() {
		return (
			<>
				<div className="hidden md:flex ">
					<img src="" alt="login" />
				</div>
				<div>
					<form className="flex flex-col justify-evenly items-center">
						<h1>Area Privata</h1>
						<p>
							Inserisci le credenziali ed accedi
							alla tua area privata di Domus
						</p>
						<input
							type="email"
							onChange={this.onChangeEmail}
						/>
						<input
							type="password"
							onChange={this.onChangePassword}
						/>
						<div>
							<input
								type="checkbox"
								checked={this.state.rememberMe}
								onChange={
									this.onChangeRememberMe
								}
							/>
							Ricorda le mie credenziali
						</div>
						<button onClick={this.onClickLogin}>
							Accedi
						</button>

						<p>Non hai un account?</p>
						<Link to={"/auth/signup"}>
							Registrati adesso
						</Link>
					</form>
				</div>
			</>
		);
	}
}

export default connect()(Login);
