import axios from "axios";
import storage from "../common/utils/storage";

export const javaAcademyServiceInstance = axios.create({
	baseURL: "http://domus-test.eba-733cj72h.eu-south-1.elasticbeanstalk.com",
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

const getDetailBuilding = (id) => javaAcademyServiceInstance.get(`/adv/${id}`);

const getAds = () => javaAcademyServiceInstance.get(`/ads`);

const javaAcademyService = {
	getAds,
	signIn,
	getDetailBuilding,
};

export default javaAcademyService;
