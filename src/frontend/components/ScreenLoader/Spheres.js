import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Spheres = () => {
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

		if (!!refFirst.current) {
			refSecond.current.position.set(
				Math.sin(clock.getElapsedTime() * 1.3),
				Math.cos(clock.getElapsedTime()) * 1.8,
				-Math.abs(Math.tan(clock.getElapsedTime() * 1.1)) - 0.5
			);
		}
	});

	return (
		<group>
			<mesh ref={refFirst}>
				<sphereGeometry args={[1]} />
				<meshPhongMaterial color={"yellow"} opacity={0.6} transparent={true} />
			</mesh>
			<mesh ref={refSecond}>
				<sphereGeometry args={[1]} />
				<meshPhongMaterial color={"yellow"} opacity={0.6} transparent={true} />
			</mesh>
		</group>
	);
};

export default Spheres;
