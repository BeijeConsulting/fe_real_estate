import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = () => {
	return (
		<ReactHelmet>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				name="description"
				content="Estate agency to find the best solutions for your living"
			/>
			<title>DOMUS</title>
		</ReactHelmet>
	);
};

export default Helmet;
