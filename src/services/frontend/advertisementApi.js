import { javaAcademyServiceInstance as client } from "../javaAcademyService";

const findAds = async (filters) => {
	return await client.post("/search/1/10", filters);
};

// Returns all the cities avaible from the database
const getCities = async () => {
	return await client.get("advertisement/listCities");
};

const getUserAds = (userId) =>
	client.get(`/user/ads/${userId}`).then((res) => res.data);

//Add new advertisement in database
const addNewAdv = async (adv, token) => {
	let headers = {
		Authorization: `Bearer ${token}`,
	};
	return await client.post("advertisement", adv, { headers });
};

export { findAds, getCities, getUserAds, addNewAdv };


