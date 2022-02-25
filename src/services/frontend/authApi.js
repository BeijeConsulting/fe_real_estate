import javaAcademyService from "../javaAcademyService";

import { setUser } from "../../redux/ducks/userMeDuck";

// private of file
const deconstructAuthBodyToDispatch = (data) => {
	return {
		user: {
			id: data.id,
			permission: data.permission,
			username: data.username,
		},
		token: data.token,
		refreshToken: data.refreshToken,
	};
};

const signIn = ({ username, password }, dispatch) =>
	javaAcademyService.signIn({ username, password }).then(({ data }) => {
		dispatch(setUser(deconstructAuthBodyToDispatch(data)));
	});

const updateAuthToken = ({ refreshToken }, dispatch) =>
	javaAcademyService.updateAuthToken(refreshToken).then(({ data }) => {
		dispatch(setUser(deconstructAuthBodyToDispatch(data)));
	});

const authApi = {
	signIn,
	updateAuthToken,
};

export default authApi;
