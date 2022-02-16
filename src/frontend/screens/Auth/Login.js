import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import storage from "../../../common/utils/storage";
import Input from "../../components/UI/Input/Input";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Button from "../../components/UI/Button/Button";

import {
	faUser,
	faLock,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import loginProfile from "../../assets/images/login-profile.png";
import { withTranslation } from "react-i18next";
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
					<img src={loginProfile} alt="login-profile" />
				</div>
				<form className="flex flex-col items-center py-5">
					<h1 className="capitalise font-primary font-extrabold text-4xl">
						{t("Login.title")}
					</h1>
					<p className="font-primary font-light text-sm w-2/3 text-center">
						{t("Login.description")}
					</p>

					<Input
						image={<FontAwesomeIcon icon={faUser} />}
						type="text"
						onChange={this.onChangeUsername}
						placeholder="Username"
						value={this.state.data.username}
					/>

					<Input
						image={<FontAwesomeIcon icon={faLock} />}
						type="password"
						onChange={this.onChangePassword}
						placeholder="Password"
						value={this.state.data.password}
					/>

					<div className="flex items-center gap-1 mt-2 mb-4">
						<Checkbox
							checked={this.state.rememberMe}
							onChange={this.onChangeRememberMe}
							label={t("Login.checkboxLabel")}
						/>
					</div>

					<Button
						onClick={this.onClickLogin}
						image={<FontAwesomeIcon icon={faCircleArrowRight} />}
						label={t("Login.signInButton")}
						type="secondary"
					/>

					<p className="font-primary mt-4">
						{t("Login.goToRegistration.label")}
					</p>
					<Link to={"/auth/signup"} className="font-primary mt-4">
						{t("Login.goToRegistration.link")}
					</Link>
				</form>
			</>
		);
	}
}

export default connect()(withTranslation()(Login));
