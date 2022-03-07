import React from "react";
import "./SpinnerScreen.css";

const SpinngerScreen = () => {
	return (
		<div
			style={{
				backgroundColor: "rgba(227, 191, 0, 1)",
				position: "fixed",
				height: "100vh",
				width: "100vw",
				left: 0,
				top: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default SpinngerScreen;
