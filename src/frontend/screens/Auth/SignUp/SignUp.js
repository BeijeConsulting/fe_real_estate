import React, { Component } from "react";

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import SignUpPrivate from "./SignUpPrivate";
import business from '../../../assets/illustrations/business.svg'

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: false,
		};
	}

	render() {
		return (
			<>
				<div className="flex flex-col  w-screen">
					<div className="flex justify-around items-center">
						<div className="hidden md:flex flex-col ">
							<img className='max-w-md' src={business} alt="login-profile" />
						</div>
						<div className="flex flex-col items-center justify-evenly">
							<SignUpPrivate />
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

	return <SignUp {...props} lang={params.lang} />;
};

export default (LocationWrap);
