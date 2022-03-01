import { LOCAL_STORAGE_KEYS } from "../../common/utils/storage";
import { javaAcademyServiceInstance } from "../javaAcademyService";

import { setUserMe, setSavedAds } from "../../redux/ducks/userMeDuck";

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
		.catch(() => { });
	return user;
};


export const userMe = async (token, dispatch) => {

	let headers = {
		'Authorization': `Bearer ${token}`,
	}

	await javaAcademyServiceInstance
		.get('/user/myProfile', { headers })
		.then(res => {
			dispatch(setUserMe(res.data))
		})
}

export const getUserSavedAds = async (token, dispatch ) => {
	let headers = {
		'Authorization': `Bearer ${token}`,
	}

	await javaAcademyServiceInstance
	.get('/user/saveadv', { headers })
	.then(res => {
		dispatch(setSavedAds(res.data))
	})
}

export const userSaveAdv = async ( advId, token ) => {
	let headers = {
		'Authorization': `Bearer ${token}`,
	}

	await javaAcademyServiceInstance
	.post('user/saveadv/' + advId,  { headers })

}