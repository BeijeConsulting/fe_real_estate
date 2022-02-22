import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import { Navigate, Link } from "react-router-dom";
import formValidation from "../../../utils/formValidation";

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
class SignUpBusiness extends Component {
	constructor(props) {
		super(props);

		/**
		 * See "formValidation.js" -> `validateObject`
		 */
		this.dataValidations = {
			vatNumber: [formValidation.nonEmptyText],
			businessName: [formValidation.nonEmptyText],
			address: [formValidation.nonEmptyText],
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
			case 'empty':
				return this.props.t('SignUp.emptyField')
			case 'invalid':
				return this.props.t('SignUp.invalidField')
			default:
				return ''
		}
	}

	resetError = (str) => () => {
		this.setState({ errors: { ...this.state.errors, [str]: '' } })
	}

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
				<h1 className="capitalise font-primary font-extrabold text-4xl">
					Registrati
				</h1>
				<p className="font-primary font-light text-sm mt-2 text-center">
					Registrati come Business
				</p>
				<Input
					placeholder={t("SignUpBusiness.VATNumber")}
					type="text"
					onChange={this.onChangeVatNumber}
					onCloseError={this.resetError('vatNumber')}
					errorMessage={this.translateErrorMessage(this.state.errors.vatNumber)}
				/>

				<Input
					placeholder={t("SignUpBusiness.businessName")}
					type="text"
					onChange={this.onChangeBusinessName}
					onCloseError={this.resetError('businessName')}
					errorMessage={this.translateErrorMessage(this.state.errors.businessName)}
				/>

				<Input
					placeholder={t("SignUpBusiness.address")}
					type="text"
					onChange={this.onChangeAddress}
					onCloseError={this.resetError('address')}
					errorMessage={this.translateErrorMessage(this.state.errors.address)}

				/>

				<Input
					placeholder="email"
					type="email"
					onChange={this.onChangeEmail}
					onCloseError={this.resetError('email')}
					errorMessage={this.translateErrorMessage(this.state.errors.email)}
				/>
				<Input
					placeholder="password"
					type="password"
					onChange={this.onChangePassword}
					onCloseError={this.resetError('password')}
					errorMessage={this.translateErrorMessage(this.state.errors.password)}
				/>

				<Button
					marginTop={'15px'}
					className="mb-5"
					type='secondary'
					onClick={this.onClickSignUp}
					label={t("SignUpBusiness.signUpButton")}
				/>


				<p className="font-primary mt-5">{t("SignUpBusiness.goToLogin.label")}</p>
				<Link className="font-primary mt-2" to={"/auth/login"}>
					{t("SignUpBusiness.goToLogin.link")}
				</Link>
				{this.state.redirectToLogin && (
					<Navigate to={"/auth/login"} />
				)}
			</form>
		);
	}
}

export default withTranslation()(SignUpBusiness);
