import axios from "axios";
import storage from "../common/utils/storage"

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

const getDetailBuilding = (id) => {
	const token = localStorage.getItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN)
	return javaAcademyServiceInstance.get(`/adv/${id}`, {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}).catch(res => {
		console.log("token", token)
		return res
	})
}

const javaAcademyService = {
	signIn,
	getDetailBuilding
};

export default javaAcademyService;
