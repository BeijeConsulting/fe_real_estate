import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";

function GLBShow({ src, mtlSrc, ...props }) {
	// const material = useLoader(MTLLoader, mtlSrc);
	// const obj = useLoader(OBJLoader, src, (loader) => {
	// 	material.preload();

	// 	loader.setMaterials(material);
	// });

	const obj = useGLTF(src);

	return <mesh {...props}>{!!obj && <primitive object={obj} />}</mesh>;
}

GLBShow.defaultProps = {
	src: "",
};

GLBShow.propTypes = {
	src: PropTypes.string,
};

export default GLBShow;
