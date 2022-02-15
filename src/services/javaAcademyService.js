import axios from "axios";

const javaAcademyServiceInstance = axios.create({
	baseURL: "http://domus-test.eba-733cj72h.eu-south-1.elasticbeanstalk.com",
});

const getUsers = () => javaAcademyServiceInstance.get("/users");

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

const javaAcademyService = {
	getUsers,
	signIn,
};

export default javaAcademyService;
