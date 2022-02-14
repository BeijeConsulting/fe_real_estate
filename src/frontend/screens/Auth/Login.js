import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../../../redux/ducks/userMeDuck";

import Input from '../../components/UI/Input/Input';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
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
			logged: false,
		};
	}

	componentDidMount = () => {
		if (this.props.emailUser !== undefined) {
			this.setState({ logged: true });
		}
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

	onChangeRememberMe = () => {
		this.setState({ rememberMe: !this.state.rememberMe });
	};

	onClickLogin = (e) => {
		e.preventDefault();

		this.props.dispatch(
			setUser({ ...this.state.data, password: undefined })
		);

		this.setState({ logged: true });
	};

	render() {
		return (
			<>
				<div className='hidden md:flex '>
					<img src='' alt='login' />
				</div>
				<form className="flex flex-col items-center ">
					<h1 className="capitalise font-extrabold text-4xl">Area Privata</h1>
					<p className="font-light text-sm w-2/3 text-center">
						Inserisci le credenziali ed accedi alla tua area
						privata di Domus
					</p>



					<Input
						type="email"
						onChange={this.onChangeEmail}
						placeholder="Email"
						className="rounded bg-secondary text-white pt-2 pb-2 pl-2 pr-2 mb-2 mt-8"
					/>

					<Input
						// imageSrc={}
						type="password"
						onChange={this.onChangePassword}
						placeholder="Password"
						className="rounded bg-secondary text-white pt-2 pb-2 pl-2 pr-2 mb-3"
					/>



					<Checkbox
						checked={this.state.rememberMe}
						onChange={this.onChangeRememberMe}
						label= "Ricorda le mie credenziali"
						className="font-black"
					/>

					<button onClick={this.onClickLogin}>Accedi</button>
					<div>
						Non hai un account?
						<a>Registrati adesso</a>
					</div>
					{/* Routing */}
					{this.state.logged && <Navigate to={"/"} />}
				</form>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	emailUser: state.userMeDuck.user.email,
});

export default connect(mapStateToProps)(Login);
