import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../../redux/ducks/userMeDuck";

import Input from "../../components/UI/Input/Input";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Button from "../../components/UI/Button/Button";

import { faUser, faLock, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
				<form className="flex flex-col items-center ">
					<h1 className="capitalise font-primary font-extrabold text-4xl">
						Area Privata
					</h1>
					<p className="font-primary font-light text-sm w-2/3 text-center">
						Inserisci le credenziali ed accedi alla tua
						area privata di Domus
					</p>

					<Input
						image={<FontAwesomeIcon icon={faUser} />}
						type="email"
						onChange={this.onChangeEmail}
						placeholder="Email"
					/>

					<Input
						image={<FontAwesomeIcon icon={faLock} />}
						type="password"
						onChange={this.onChangePassword}
						placeholder="Password"
					/>


					<div className="flex items-center gap-1 mt-2 mb-4">
						<Checkbox
							checked={this.state.rememberMe}
							onChange={this.onChangeRememberMe}
							label="Ricorda le mie credenziali"
						/>
					</div>


					<Button
						onClick={this.onClickLogin}
						image={<FontAwesomeIcon icon={faCircleArrowRight} />}
						label='Accedi'
						type=''
					/>

					<p className="font-primary mt-4">Non hai un account?</p>
					<Link to={"/auth/signup"} className="font-primary">Registrati adesso</Link>
				</form>
			</>
		);
	}
}

export default connect()(Login);
