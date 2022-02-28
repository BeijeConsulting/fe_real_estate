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

export const signUp = async (data) => {
	let err = null;
	let res = null;

	const body = { ...data, status: "ACTIVE" };

	await javaAcademyServiceInstance
		.post("/user/register", body)
		.then((response) => {
			res = response;
		})
		.catch((error) => {
			err = error;
		});

	if (!!err) {
		throw err;
	}

	return res;
};
