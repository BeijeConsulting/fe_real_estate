import React from "react";
import imgNotFound from "../../common/assets/images/404.svg"
import "./notFound.css"

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-secondary font-primary">
			<div className="container">
				<img src={imgNotFound} />
				<h1 className="-mt-10 text-center text-3xl font-bold color-secondary">PAGE NOT FOUND</h1>
			</div>
		</div>
	)
};

export default NotFound;
