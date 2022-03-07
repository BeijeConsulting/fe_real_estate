import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";
import Button from "../../components/UI/Button/Button";
import { Loader, OrbitControls } from "@react-three/drei";

import luxuryHouse from "../../assets/3DModels/luxury house/luxury house interior.obj";
import luxuryHouseMtl from "../../assets/3DModels/luxury house/luxury house interior.mtl";

import { Canvas } from "@react-three/fiber";

const OBJMTLShow = React.lazy(() => import("./OBJMTLShow"));

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
					<ambientLight intensity={1} />
					<pointLight intensity={1} position={[10, 10, 10]} />
					<OrbitControls />
					<Suspense fallback={null}>
						<OBJMTLShow
							src={luxuryHouse}
							mtlSrc={luxuryHouseMtl}
							position={[0, -5, -30]}
							scale={0.1}
						/>
					</Suspense>
				</Canvas>
				<Loader barStyles={{ height: 20 }} dataStyles={{ fontSize: 25 }} />
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
