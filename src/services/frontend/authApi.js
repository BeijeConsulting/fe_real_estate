import javaAcademyService from "../javaAcademyService";

import { setUser } from "../../redux/ducks/userMeDuck";

const signIn = ({ username, password }, rememberMeObj, dispatch) =>
	javaAcademyService
		.signIn({ username, password })
		.then(({ data: { id, permission, token, username } }) =>
			dispatch(
				setUser(
					{
						id,
						permission,
						username,
					},
					rememberMeObj,
					token
				)
			)
		);

const authApi = {
	signIn,
};

export default authApi;
