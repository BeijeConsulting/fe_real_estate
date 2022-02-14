import React, { Component } from "react";
import Card from "../../components/UI/Card/Card";
import logo from "../../../common/assets/logo/logo.png";

import { Outlet } from "react-router-dom";

export default class Auth extends Component {
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
						{/* IN LOGIN */}
						{/* <div className='hidden md:flex '>
							<img src='' alt='login' />
						</div>
						<div>
							<p>FORM TO ADD</p>
						</div> */}
						<Outlet />
					</Card>
				</div>
			</div>
		);
	}
}
