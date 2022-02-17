import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import { Link, Outlet } from "react-router-dom";

import loginProfile from "../../../assets/images/login-profile.png"

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	render() {
		const { t, path } = this.props;

		return (
			<>
				<div className="flex flex-col  w-screen">
					<div className="flex items-center justify-center">

						<div className="my-4 px-5 py-2 rounded-full bg-tertiary text-lg font-medium ">
							<Link className={`uppercase font-primary ${path === '/auth/signup/private' ? 'bg-primary rounded-full py-1 px-1 transition-all' : ''}`}
							to={"private"}
							>
								{" "}
								{t("SignUp.goToPrivateSignUp")}{" "}
							</Link>{" "}
							{" | "}
							<Link className={`uppercase font-primary ${path === '/auth/signup/business' ? 'bg-primary rounded-full py-1 px-1 transition-all' : ''}`} to={"business"}>
								{t("SignUp.goToBusinessSignUp")}
							</Link>
						</div>
					</div>

					<div className="flex justify-around items-center">
						<div className="hidden md:flex flex-col ">
							<img src={loginProfile} alt="login-profile" />
						</div>
						<div className="flex flex-col items-center justify-evenly">
							<Outlet />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default withTranslation()(SignUp);
