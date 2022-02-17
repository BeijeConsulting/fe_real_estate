import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";

import { OrbitControls, TrackballControls } from "@react-three/drei";

import dragon from "../../assets/3DModels/dragon/Dragon 2.5_fbx.fbx";
import dragonGroundTexture from "../../assets/3DModels/dragon/textures/Dragon_ground_color.jpg";
import smartphone from "../../assets/3DModels/Smartphone-3D-Model/Smartphone 3D Model.obj";
import { TextureLoader } from "three";
import { useFBX } from "@react-three/drei";

import house from "../../assets/3DModels/house/H01.obj";

import { Canvas, useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { MeshNormalMaterial } from "three";

function ShowModelFBX({ src, srcMap, ...props }) {
	let fbx = useFBX(src);
	if (!!srcMap) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const dragonGroundMap = useLoader(TextureLoader, srcMap);
		if (!!srcMap) {
			fbx.traverse(function (child) {
				if (child.isMesh) {
					child.material.forEach((m) => (m.map = dragonGroundMap));
				}
			});
		}
	}
	return (
		<mesh {...props}>
			<primitive object={fbx} />
		</mesh>
	);
}

function ShowModelObj({ src, ...props }) {
	const obj = useLoader(OBJLoader, src);

	const mtl = new MeshNormalMaterial();

	obj.traverse(function (child) {
		if (child.isMesh) {
			child.material = mtl;
		}
	});

	return <mesh {...props}>{!!obj && <primitive object={obj} />}</mesh>;
}

const Scene = () => {
	return (
		<Canvas
			style={{
				background: "white",
				height: "60vh",
				width: "80vw",
			}}
		>
			<Suspense fallback={null}>
				<ambientLight intensity={1} />
				<pointLight intensity={1} position={[10, 10, 10]} />
				{/* <TrackballControls /> */}
				<OrbitControls />
				<ShowModelFBX
					src={dragon}
					srcMap={dragonGroundTexture}
					position={[40, 0, 0]}
				/>
				<ShowModelObj src={house} position={[-50, 0, 0]} scale={0.1} />
				<ShowModelObj src={smartphone} position={[0, -20, 0]} scale={0.1} />
			</Suspense>
		</Canvas>
	);
};

class Property3DView extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onClickClose = (e) => {
		e.stopPropagation();
		this.props.onClickClose();
	};

	render() {
		return (
			<div
				style={{
					alignItems: "center",
					backgroundColor: "rgba(0,0,0,0.4)",
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					justifyContent: "center",
					left: 0,
					position: "fixed",
					top: 0,
					width: "100vw",
					zIndex: "9",
				}}
			>
				<button className="bg-red-600" onClick={this.onClickClose}>
					Close
				</button>

				<Scene />
			</div>
		);
	}
}

Property3DView.defaultProps = {
	onClickClose: () => undefined,
};

Property3DView.propTypes = {
	onClickClose: PropTypes.func,
};

export default Property3DView;
