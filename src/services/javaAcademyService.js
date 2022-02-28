import axios from "axios";

export const javaAcademyServiceInstance = axios.create({
	baseURL: "https://domus-api.beije.it",
});

const signIn = ({ username, password }) =>
	javaAcademyServiceInstance.post(
		"/signin",
		{
			username,
			password,
		},
		{
			headers: {
				"Content-type": "application/json",
			},
		}
	);

const updateAuthToken = (refreshToken) =>
	javaAcademyServiceInstance.post(
		"/updateAuthToken",
		{
			refreshToken,
		},
		{
			headers: {
				"Content-type": "application/json",
			},
		}
	);

const getDetailBuilding = (id) =>
	javaAcademyServiceInstance.get(`/advertisement/${id}`);

const getAds = () => javaAcademyServiceInstance.get(`/ads`);

const javaAcademyService = {
	getAds,
	signIn,
	getDetailBuilding,
	updateAuthToken,
};

export default javaAcademyService;
