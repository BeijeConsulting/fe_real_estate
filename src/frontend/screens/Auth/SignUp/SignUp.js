import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import { Link, Outlet } from "react-router-dom";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	render() {
		const { t } = this.props;

		return (
			<div className="flex flex-col items-center justify-evenly">
				<div>
					<Link to={"private"}>
						{" "}
						{t("SignUp.goToPrivateSignUp")}{" "}
					</Link>{" "}
					{" | "}
					<Link to={"business"}>
						{t("SignUp.goToBusinessSignUp")}
					</Link>
				</div>
				<Outlet />
			</div>
		);
	}
}

export default withTranslation()(SignUp);
