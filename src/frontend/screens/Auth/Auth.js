import React, { Component } from "react";

import { Outlet } from "react-router-dom";

export default class Auth extends Component {
	render() {
		return (
			<div>
				{/* schermo blu */}
				{/* header with navbar and logo below */}

				{/* CARD WITH FORM */}
				<div>
					{/* Login / Registration */}
					<Outlet />
				</div>
			</div>
		);
	}
}
