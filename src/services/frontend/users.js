import { javaAcademyServiceInstance } from "../javaAcademyService";

const tokenDefault =
	"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiIsIkNIRUNLRVIiXSwiaWF0IjoxNjQ1Nzg0OTY4LCJleHAiOjE2NDU3ODg1Njh9.xIKvGI_NM6a_gZNhIiU33B4MpSSYRfqgXuXqAp98r2I";

export const getUserByUsername = async (username, token = tokenDefault) => {
	let user = "";
	const headers = {
		Authorization: "Bearer " + token,
	};
	await javaAcademyServiceInstance
		.get("/user/find/" + username, { headers })
		.then((response) => {
			user = response.data;
		})
		.catch(() => {});
	return user;
};
