import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				User
				<Outlet />
				{this.props.username === undefined && (
					<Navigate to={"/auth/login"} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	username: state.userMeDuck.user.username,
});

export default connect(mapStateToProps)(User);
