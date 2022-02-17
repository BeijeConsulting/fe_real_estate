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
				<header className="flex items-center justify-center gap-2 py-5">
					<div className="flex items-center justify-center gap-2 py-5">
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
					<Languages
						fgClass="color-primary"
						valueSize={10}
						icoSize={10}
					/>
				</header>

				<div className="flex items-center justify-center">
					<Card className="items-center justify-around px-5 py-5 w-10/12 max-w-4xl">
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
