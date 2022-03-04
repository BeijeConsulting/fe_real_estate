import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";
import Button from "../../components/UI/Button/Button";
import { Loader, OrbitControls } from "@react-three/drei";

import luxuryHouse from "../../assets/3DModels/luxury house/luxury house interior.obj";
import luxuryHouseMtl from "../../assets/3DModels/luxury house/luxury house interior.mtl";
// import dragon from "../../assets/3DModels/dragon/Dragon 2.5_fbx.fbx";
// import dragonGroundTexture from "../../assets/3DModels/dragon/textures/Dragon_ground_color.jpg";
// import smartphone from "../../assets/3DModels/Smartphone-3D-Model/Smartphone 3D Model.obj";
// import smartphoneMTL from "../../assets/3DModels/Smartphone-3D-Model/Smartphone 3D Model.mtl";

// import houseMTL from "../../assets/3DModels/house/H01.mtl";
// import house from "../../assets/3DModels/house/H01.obj";

import { Canvas } from "@react-three/fiber";

import OBJMTLShow from "./OBJMTLShow";
// import FBXTexureShow from "./FBXTextureShow";
// import GLBShow from "./GLBShow";

class Property3DView extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onClickClose = (e) => {
		e.stopPropagation();
		this.props.onClickClose();
	};

	chooseLoader = () => {};

	render() {
		return (
			<div
				style={{
					alignItems: "center",
					backgroundColor: "rgba(0, 0, 0, 0.4)",
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
				<Button label="Close" onClick={this.onClickClose} />

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
						<OrbitControls />
						<OBJMTLShow
							src={luxuryHouse}
							mtlSrc={luxuryHouseMtl}
							position={[0, 0, 0]}
							scale={0.4}
						/>
					</Suspense>
				</Canvas>
				<Loader />
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
