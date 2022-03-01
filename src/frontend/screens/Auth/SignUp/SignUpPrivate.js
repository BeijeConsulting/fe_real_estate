import React, { Component } from "react";

// utils
import formValidation from "../../../utils/formValidation";

// routing
import { Navigate, Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/properties";

// components
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

// translations
import { withTranslation } from "react-i18next";

// seo
import { Helmet } from "react-helmet";

// api
import { signUp } from "../../../../services/frontend/usersApi";

class SignUpPrivate extends Component {
	constructor(props) {
		super(props);

		/**
		 * See "formValidation.js" -> `validateObject`
		 */
		this.dataValidations = {
			cf: [formValidation.nonEmptyText],
			name: [formValidation.nonEmptyText],
			surname: [formValidation.nonEmptyText],
			username: [formValidation.nonEmptyText],
			email: [formValidation.nonEmptyText, formValidation.invalidEmail],
			password: [formValidation.nonEmptyText, formValidation.invalidPassword],
		};

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

	// Errors

	areDataValid = () => {
		const { noError, errors } = formValidation.validateObject(
			this.state.data,
			this.dataValidations
		);

		this.setState({ errors });

		return noError;
	};

	translateErrorMessage = (str) => {
		switch (str) {
			case "empty":
				return this.props.t("SignUp.emptyField");
			case "invalid":
				return this.props.t("SignUp.invalidField");
			default:
				return "";
		}
	};

	resetError = (str) => () => {
		this.setState({ errors: { ...this.state.errors, [str]: "" } });
	};

	// Submit

	onClickSignUp = (e) => {
		e.preventDefault();

		if (this.areDataValid()) {
			signUp(this.state.data).then(() => {
				this.redirectToLogin();
			});
		}
	};

	render() {
		const { t } = this.props;

		return (
			<>
				{/* SEO */}
				<Helmet>
					<meta
						name="description"
						content={t("SignUpPrivate.helmet.description")}
					/>
					<title>{t("SignUpPrivate.helmet.title")}</title>
				</Helmet>
				<form className="flex flex-col justify-evenly items-center">
					<h1 className="capitalise font-primary font-extrabold text-4xl">
						{t("SignUpPrivate.signUp")}
					</h1>
					<p className="font-primary font-light text-sm mt-2 text-center">
						{t("SignUpPrivate.signUpPrivate")}
					</p>
					<Input
						placeholder={t("SignUpPrivate.cf")}
						type="text"
						onChange={this.onChangeCF}
						onCloseError={this.resetError("cf")}
						errorMessage={this.translateErrorMessage(this.state.errors.cf)}
					/>
					<Input
						placeholder={t("SignUpPrivate.name")}
						type="text"
						onChange={this.onChangeName}
						onCloseError={this.resetError("name")}
						errorMessage={this.translateErrorMessage(this.state.errors.name)}
					/>

					<Input
						placeholder={t("SignUpPrivate.surname")}
						type="text"
						onChange={this.onChangeSurname}
						onCloseError={this.resetError("surname")}
						errorMessage={this.translateErrorMessage(this.state.errors.surname)}
					/>

					<Input
						placeholder="username"
						type="text"
						onChange={this.onChangeUsername}
						onCloseError={this.resetError("username")}
						errorMessage={this.translateErrorMessage(
							this.state.errors.username
						)}
					/>

					<Input
						placeholder="email"
						type="email"
						onChange={this.onChangeEmail}
						onCloseError={this.resetError("email")}
						errorMessage={this.translateErrorMessage(this.state.errors.email)}
					/>

					<Input
						placeholder="password"
						type="password"
						onChange={this.onChangePassword}
						onCloseError={this.resetError("password")}
						errorMessage={this.translateErrorMessage(
							this.state.errors.password
						)}
					/>

					<Button
						marginTop={"15px"}
						className="mb-5"
						onClick={this.onClickSignUp}
						label={t("SignUpPrivate.signUpButton")}
						type="secondary"
					/>

					<p className="font-primary mt-5">
						{t("SignUpPrivate.goToLogin.label")}
					</p>
					<Link
						className="font-primary mt-2"
						to={`/${this.props.i18n.language}/${ROUTES.FE.BASE.AUTH.SELF}/${ROUTES.FE.BASE.AUTH.LOGIN}`}
					>
						{t("SignUpPrivate.goToLogin.link")}
					</Link>
					{this.state.redirectToLogin && (
						<Navigate
							to={`/${this.props.i18n.language}/${ROUTES.FE.BASE.AUTH.SELF}/${ROUTES.FE.BASE.AUTH.LOGIN}`}
						/>
					)}
				</form>
			</>
		);
	}
}

export default withTranslation()(SignUpPrivate);
