import React, { Component } from "react";

import { Link, Outlet } from "react-router-dom";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	render() {
		return (
			<div className="flex flex-col items-center justify-evenly">
				<div>
					<Link to={"private"}>Private</Link> {" | "}
					<Link to={"business"}>Business</Link>
				</div>
				<Outlet />
			</div>
		);
	}
}

export default SignUp;
