import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import { TextureLoader } from "three";

import { useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";

function FBXTexureShow({ src, srcTexture, ...props }) {
	const texture = useLoader(TextureLoader, srcTexture);

	const obj = useLoader(FBXLoader, src);

	obj.traverse(function (child) {
		if (child.isMesh) {
			if (!!child.material.length) {
				child.material.forEach((m) => (m.map = texture));
			} else {
				child.material.map = texture;
			}
		}
	});

	return (
		<mesh {...props}>
			<primitive object={obj} />
		</mesh>
	);
}

FBXTexureShow.defaultProps = {
	src: "",
	srcTexture: "",
};

FBXTexureShow.propTypes = {
	src: PropTypes.string,
	srcTexture: PropTypes.string,
};

export default FBXTexureShow;
