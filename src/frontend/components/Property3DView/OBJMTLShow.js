import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";

function OBJMTLShow({ src, mtlSrc, ...props }) {
	const material = useLoader(MTLLoader, mtlSrc);
	const obj = useLoader(OBJLoader, src, (loader) => {
		material.preload();

		loader.setMaterials(material);
	});

	return <mesh {...props}>{!!obj && <primitive object={obj} />}</mesh>;
}

OBJMTLShow.defaultProps = {
	src: "",
	mtlSrc: "",
};

OBJMTLShow.propTypes = {
	src: PropTypes.string,
	mtlSrc: PropTypes.string,
};

export default OBJMTLShow;
