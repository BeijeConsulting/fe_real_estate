import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import storage from "../../../common/utils/storage";
import Input from "../../components/UI/Input/Input";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import { withTranslation } from "react-i18next";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authApi from "../../../services/frontend/authApi";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				username: "",
				password: "",
			},
			rememberMe: false,
			errors: {
				username: "",
				password: "",
			},
		};
	}

	componentDidMount = () => {
		const rememberMe = JSON.parse(
			localStorage.getItem(storage.LOCAL_STORAGE_KEYS.REMEMBER_ME)
		);

		if (rememberMe !== null && !!rememberMe.username) {
			this.setState({
				data: {
					...this.state.data,
					username: rememberMe.username,
				},
				rememberMe: true,
			});
		}
	};

	onChangeUsername = (e) => {
		this.setState({
			data: { ...this.state.data, username: e.target.value },
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

		let rememberMeObj = {};

		if (this.state.rememberMe) {
			rememberMeObj = {
				username: this.state.data.username,
			};
		}

		authApi.signIn(
			{
				username: this.state.data.username,
				password: this.state.data.password,
			},
			rememberMeObj,
			this.props.dispatch
		);
	};

	render() {
		const { t } = this.props;

		return (
			<>
				<div className="hidden md:flex ">
					<img src="" alt="login" />
				</div>
				<form className="flex flex-col items-center ">
					<h1 className="capitalise font-extrabold text-4xl">
						{t("Login.title")}
					</h1>
					<p className="font-light text-sm w-2/3 text-center">
						{t("Login.description")}
					</p>

					<Input
						image={<FontAwesomeIcon icon={faPerson} />}
						type="text"
						onChange={this.onChangeUsername}
						placeholder="Username"
						className="rounded bg-secondary text-white pt-2 pb-2 pl-2 pr-2 mb-2 mt-8"
						value={this.state.data.username}
					/>

					<Input
						image={<FontAwesomeIcon icon={faPerson} />}
						type="password"
						onChange={this.onChangePassword}
						placeholder="Password"
						className="rounded bg-secondary text-white pt-2 pb-2 pl-2 pr-2 mb-3"
					/>

					<Checkbox
						checked={this.state.rememberMe}
						onChange={this.onChangeRememberMe}
						label={t("Login.checkboxLabel")}
						className="font-black"
					/>

					<button onClick={this.onClickLogin}>
						{t("Login.signInButton")}
					</button>
					<p>{t("Login.goToRegistration.label")}</p>
					<Link to={"/auth/signup"}>
						{t("Login.goToRegistration.link")}
					</Link>
				</form>
			</>
		);
	}
}

export default connect()(withTranslation()(Login));
