import React from "react";
import { Canvas } from "@react-three/fiber";
import Spheres from "./Spheres";

const ScreenLoader = () => {
	return (
		<div
			style={{
				alignItems: "center",
				backgroundColor: "transparent",
				display: "flex",
				height: "100vh",
				justifyContent: "center",
				left: 0,
				position: "fixed",
				top: 0,
				width: "100vw",
			}}
		>
			<Canvas
				style={{
					backgroundColor: "transparent",
					height: "400px",
					width: "400px",
				}}
			>
				<ambientLight intensity={1} />
				<pointLight intensity={1} position={[10, 10, 10]} />
				<Spheres />
			</Canvas>
		</div>
	);
};

export default ScreenLoader;
