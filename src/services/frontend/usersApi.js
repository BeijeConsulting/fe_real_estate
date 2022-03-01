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

export const getUserSavedAds = async ( dispatch ) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN);
	
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

export const updateUser = async ( newObj ) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN);
	let headers = { 'Authorization': `Bearer ${token}` }

	await javaAcademyServiceInstance.put('/user/update', newObj, { headers } ) 
}

export const getUserPostedAdvs = async () => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN);
	let headers = {	'Authorization': `Bearer ${token}` }

	let data;

	await javaAcademyServiceInstance
	.get('/user/myAdvertisements', { headers})
	.then( res => data = res.data )

	return data
}


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
