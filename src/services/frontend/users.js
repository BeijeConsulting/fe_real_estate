import { LOCAL_STORAGE_KEYS } from "../../common/utils/storage";
import { javaAcademyServiceInstance } from "../javaAcademyService";

export const getUserByUsername = async (username) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN);

	if (!token) {
		return null;
	}

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
