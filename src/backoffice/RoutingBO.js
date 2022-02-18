import { Link, Outlet } from "react-router-dom";

import React from "react";

export const Login = () => {
	return <div>io sono login</div>;
};
export const DashBoard = () => <div>io sono DashBoard</div>;

export const AsideBar = () => (
	<div>
		io sono AsideBar
		<Link to={"/admin/users"}>Link</Link>
		<Link to={"/admin/dashBoard"}>Link</Link>
		<Link to={"/adminLogin"}>Link</Link>
		<div></div>
		<div></div>
		<div>
			<Outlet />
		</div>
	</div>
);

export const User = () => <div>io sono Orders</div>;