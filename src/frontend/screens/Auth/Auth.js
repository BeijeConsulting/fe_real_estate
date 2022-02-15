import React, { Component } from "react";
import Card from "../../components/UI/Card/Card";
import Languages from "../../components/Languages/Languages";
import logo from "../../../common/assets/logo/logo.png";
import storage from "../../../common/utils/storage";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	componentDidMount = () => {
		if (!this.props.username) {
			const token = localStorage.getItem(
				storage.LOCAL_STORAGE_KEYS.USER_TOKEN
			);

			if (!!token) {
				// make call to validate token
			}
		}
	};

	render() {
		return (
			<div className="bg-secondary h-screen ">
				<header className="flex items-center justify-center gap-2 pt-5 pb-5">
					<div className="flex items-center justify-center gap-2 pt-5 pb-5">
						<img
							src={logo}
							alt="logo"
							className="h-10 "
						/>
						<h1 className="color-primary uppercase font-extrabold text-4xl">
							domus
						</h1>
					</div>
					<p className="color-primary text-5xl">|</p>
					<Languages classNameContainer="color-primary" />
				</header>

				<div className="flex items-center justify-center">
					<Card className="pt-2 pr-4 pl-4 pb-2 w-10/12">
						{/* Login / Registration */}
						<Outlet />
					</Card>
				</div>
				{/* Routing */}
				{this.props.username !== undefined && (
					<Navigate to={"/"} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	username: state.userMeDuck.user.username,
});

export default connect(mapStateToProps)(Auth);
