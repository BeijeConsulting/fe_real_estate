import { javaAcademyServiceInstance } from "../javaAcademyService";

const tokenDefault =
	"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiIsIkNIRUNLRVIiXSwiaWF0IjoxNjQ1NjMyMDI5LCJleHAiOjE2NDU2MzU2Mjl9.aRNY-zBzbyp-0hsDm-5Fld4d6v49H-WVRbZ7r_p60ro";

export const getUserByUsername = async (username, token = tokenDefault) => {
	let user = "";
	const headers = {
		Authorization: "Bearer " + token,
	};
	await javaAcademyServiceInstance
		.get("/finduser/" + username, { headers })
		.then((response) => {
			user = response.data;
		})
		.catch(() => {});
	return user;
};
