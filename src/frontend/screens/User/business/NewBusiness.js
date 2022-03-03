import React, { Component } from "react";

// routing
import { Navigate, Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/properties";

// utils
import formValidation from "../../../utils/formValidation";

// components
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

// translations
import { withTranslation } from "react-i18next";

// seo
import { Helmet } from "react-helmet";

// api
import { connect } from "react-redux";
import { createBusiness } from "../../../../services/frontend/managerApi"
import { getUserMe } from "../../../../services/frontend/usersApi";
class NewBusiness extends Component {
	constructor(props) {
		super(props);

		/**
		 * See "formValidation.js" -> `validateObject`
		 */
		this.dataValidations = {
			vatNumber: [formValidation.nonEmptyText],
			businessName: [formValidation.nonEmptyText],
			refName: [formValidation.nonEmptyText],
			refSurname: [formValidation.nonEmptyText],
			phone: [formValidation.nonEmptyText],
		};

		this.state = {
			data: {
				vatNumber: "",
				businessName: "",
				refName: "",
				refSurname: "",
				phone: "",
			},
			errors: {
				vatNumber: "",
				businessName: "",
				refName: "",
				refSurname: "",
				phone: "",
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
			data: { ...this.state.data, vatNumber: e.target.value },
		});
	};

	onChangeBusinessName = (e) => {
		this.setState({
			data: { ...this.state.data, businessName: e.target.value },
		});
	};

	onChangerefName = (e) => {
		this.setState({
			data: { ...this.state.data, refName: e.target.value },
		});
	};

	onChangerefSurname = (e) => {
		this.setState({
			data: { ...this.state.data, refSurname: e.target.value },
		});
	};

	onChangePhone = (e) => {
		this.setState({
			data: { ...this.state.data, phone: e.target.value },
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
			//registra business

			createBusiness(this.state.data, this.props.dispatch)
				.catch((err) => {
					console.error(err);
				})

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
						content={t("SignUpBusiness.helmet.description")}
					/>
					<title>{t("SignUpBusiness.helmet.title")}</title>
				</Helmet>
				<form className="flex flex-col justify-evenly items-center mt-5">
					<h1 className="capitalise font-primary font-extrabold text-4xl">
						{t("SignUpBusiness.signUp")}
					</h1>


					<div className="mt-5">
						<Input
							placeholder={t("SignUpBusiness.VATNumber")}
							type="text"
							onChange={this.onChangeVatNumber}
							onCloseError={this.resetError("vatNumber")}
							errorMessage={this.translateErrorMessage(
								this.state.errors.vatNumber
							)}
						/>
					</div>
					<div className="mt-5">
						<Input
							placeholder={t("SignUpBusiness.businessName")}
							type="text"
							onChange={this.onChangeBusinessName}
							onCloseError={this.resetError("businessName")}
							errorMessage={this.translateErrorMessage(
								this.state.errors.businessName
							)}
						/>
					</div>

					<div className="mt-5">
						<Input
							placeholder={t("SignUpBusiness.refName")}
							type="text"
							onChange={this.onChangerefName}
							onCloseError={this.resetError("refName")}
							errorMessage={this.translateErrorMessage(
								this.state.errors.refName
							)}
						/>
					</div>
					<div className="mt-5">
						<Input
							placeholder={t("SignUpBusiness.refSurname")}
							type="text"
							onChange={this.onChangerefSurname}
							onCloseError={this.resetError("refSurname")}
							errorMessage={this.translateErrorMessage(
								this.state.errors.refSurname
							)}
						/>
					</div>

					<div className="mt-5">
						<Input
							placeholder={t("SignUpBusiness.Phone")}
							type="text"
							onChange={this.onChangePhone}
							onCloseError={this.resetError("phone")}
							errorMessage={this.translateErrorMessage(this.state.errors.phone)}
						/>
					</div>

					<Button
						marginTop={"15px"}
						className="mb-5"
						type="secondary"
						onClick={this.onClickSignUp}
						label={t("SignUpBusiness.signUpButton")}
					/>





				</form>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	business: state.userMeDuck.user.business,
});

export default connect(mapStateToProps)(withTranslation()(NewBusiness));
