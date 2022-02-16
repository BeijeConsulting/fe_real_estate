import React, { Component } from "react";
import formValidation from "../../../utils/formValidation";
import { Navigate, Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
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
			email: [
				formValidation.nonEmptyText,
				formValidation.invalidEmail,
			],
			password: [
				formValidation.nonEmptyText,
				formValidation.invalidPassword,
			],
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

	// Submit

	onClickSignUp = (e) => {
		e.preventDefault();

		if (this.areDataValid()) {
			this.redirectToLogin();
		}
	};

	render() {
		const { t } = this.props;

		return (
			<form className="flex flex-col justify-evenly items-center">
				<Input
					placeholder={t("SignUpPrivate.cf")}
					type="text"
					onChange={this.onChangeCF}
				/>
				<Input
					placeholder={t("SignUpPrivate.name")}
					type="text"
					onChange={this.onChangeName}
				/>

				<Input
					placeholder={t("SignUpPrivate.surname")}
					type="text"
					onChange={this.onChangeSurname}
				/>

				<Input
					placeholder="username"
					type="text"
					onChange={this.onChangeUsername}
				/>

				<Input
					placeholder="email"
					type="email"
					onChange={this.onChangeEmail}
				/>

				<Input
					placeholder="password"
					type="password"
					onChange={this.onChangePassword}
				/>

				<Button
				marginTop={'15px'}
				className="mb-5"
				onClick={this.onClickSignUp}
				label={t("SignUpPrivate.signUpButton")}
				type='secondary'
				/>

				<p className="font-primary mt-5">{t("SignUpPrivate.goToLogin.label")}</p>
				<Link className="font-primary mt-2" to={"/auth/login"}>{t("SignUpPrivate.goToLogin.link")}</Link>
				{this.state.redirectToLogin && (
					<Navigate to={"/auth/login"} />
				)}
			</form>
		);
	}
}

export default withTranslation()(SignUpPrivate);
