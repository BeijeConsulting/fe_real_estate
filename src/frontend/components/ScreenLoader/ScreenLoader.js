import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const ScreenLoader = () => {
	const refFirst = useRef(null);
	const refSecond = useRef(null);

	useFrame(({ clock }) => {
		if (!!refFirst.current) {
			refFirst.current.position.set(
				Math.cos(clock.getElapsedTime()),
				Math.sin(clock.getElapsedTime()),
				-Math.abs(Math.tan(clock.getElapsedTime()))
			);
		}
	});

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
				<mesh ref={refFirst}>
					<sphereGeometry args={[1]} />
					<meshPhongMaterial
						color={"yellow"}
						opacity={0.6}
						transparent={true}
					/>
				</mesh>
				<mesh ref={refSecond}>
					<sphereGeometry args={[1]} />
					<meshPhongMaterial
						color={"yellow"}
						opacity={0.6}
						transparent={true}
					/>
				</mesh>
			</Canvas>
		</div>
	);
};

export default ScreenLoader;
