import React, { Component } from "react";

// style
import {
	faUser,
	faLock,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loginProfile from "../../assets/images/login-profile.png";

// redux
import { connect } from "react-redux";

// routing
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/properties";

// utils
import storage from "../../../common/utils/storage";

// components
import Input from "../../components/UI/Input/Input";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Button from "../../components/UI/Button/Button";

// api
import authApi from "../../../services/frontend/authApi";

// translation
import { withTranslation } from "react-i18next";

// seo
import { Helmet } from "react-helmet";

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

		authApi
			.signIn(
				{
					username: this.state.data.username,
					password: this.state.data.password,
				},
				this.props.dispatch
			)
			.then(() =>
				localStorage.setItem(
					storage.LOCAL_STORAGE_KEYS.REMEMBER_ME,
					JSON.stringify(rememberMeObj)
				)
			);
	};

	render() {
		const { t } = this.props;

		return (
			<div className="flex flex-row py-10">
				{/* SEO */}
				<Helmet>
					<meta name="description" content={t("Login.helmet.description")} />
					<title>{t("Login.helmet.title")}</title>
				</Helmet>
				<div className="hidden md:flex items-center">
					<img className="max-h-72" src={loginProfile} alt="login-profile" />
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
					<Link
						to={`/${this.props.i18n.language}/${ROUTES.FE.BASE.AUTH.SELF}/${ROUTES.FE.BASE.AUTH.SIGNUP.SELF}`}
						className="font-primary mt-4"
					>
						{t("Login.goToRegistration.link")}
					</Link>
				</form>
			</div>
		);
	}
}

export default connect()(withTranslation()(Login));
