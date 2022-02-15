import axios from "axios";

const javaAcademyService = axios.create({
	baseURL: "http://domus-test.eba-733cj72h.eu-south-1.elasticbeanstalk.com",
});

export default javaAcademyService;
