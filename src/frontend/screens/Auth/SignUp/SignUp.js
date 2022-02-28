import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import business from '../../../assets/illustrations/business.svg'

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

						<div className="my-4 px-2 py-2 flex rounded bg-tertiary text-lg font-medium ">
							<Link
								className={`uppercase px-2 rounded font-primary hover:text-black ${path === `/${this.props.lang}/auth/signup/private` ? 'bg-primary text-black' : 'text-gray-300'}`}
								to={"private"}
							>

								{t("SignUp.goToPrivateSignUp")}
							</Link>
							<p className='px-2 text-gray-300'>|</p>
							<Link
								className={`uppercase px-2 rounded font-primary hover:text-black  ${path === `/${this.props.lang}/auth/signup/business` ? 'bg-primary text-black ' : 'text-gray-300'}`}
								to={"business"}
							>
								{t("SignUp.goToBusinessSignUp")}
							</Link>
						</div>
					</div>

					<div className="flex justify-around items-center">
						<div className="hidden md:flex flex-col ">
							<img className='max-w-md' src={business} alt="login-profile" />
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

SignUp.propTypes = {
	path: PropTypes.string.isRequired,
};

const LocationWrap = (props) => {
	const params = useParams()
	const location = useLocation();
	return <SignUp {...props} path={location.pathname} lang={params.lang} />;
};

export default withTranslation()(LocationWrap);
