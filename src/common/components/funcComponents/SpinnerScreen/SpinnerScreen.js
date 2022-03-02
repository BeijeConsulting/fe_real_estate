import React from "react";
import "./SpinnerScreen.css";

const SpinngerScreen = () => {
	return (
		<div
			style={{
				backgroundColor: "rgba(255, 253, 67,0.4)",
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
			<div className="lds-hourglass"></div>
		</div>
	);
};

export default SpinngerScreen;
