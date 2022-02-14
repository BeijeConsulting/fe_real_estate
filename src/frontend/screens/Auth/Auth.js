import React, { Component } from "react";
import Card from "../../components/UI/Card/Card";
import logo from "../../../common/assets/logo/logo.png";

import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	redirectOnAuthenticated = () => {
		if (this.props.emailUser !== undefined) {
			console.log("redirect");
			this.setState({ logged: true });
		}
	};

	componentDidMount = () => {
		this.redirectOnAuthenticated();
	};

	componentDidUpdate = () => {
		this.redirectOnAuthenticated();
	};

	render() {
		return (
			<div className="bg-secondary h-screen ">
				<header className="flex items-center justify-center gap-2 pt-5 pb-5">
					<img src={logo} alt="logo" className="h-10 " />
					<h1 className="color-primary uppercase font-extrabold text-4xl">
						domus
					</h1>
				</header>

				<div className="flex items-center justify-center">
					<Card className="pt-2 pr-4 pl-4 pb-2 w-10/12">
						{/* Login / Registration */}
						<Outlet />
					</Card>
				</div>
				{/* Routing */}
				{this.state.logged && <Navigate to={"/"} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	emailUser: state.userMeDuck.user.email,
});

export default connect(mapStateToProps)(Auth);
