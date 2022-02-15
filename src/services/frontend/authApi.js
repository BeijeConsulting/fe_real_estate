import javaAcademyService from "../javaAcademyService";
import storage from "../../common/utils/storage";
import { setUser } from "../../redux/ducks/userMeDuck";

const signIn = ({ username, password }, rememberMeObj, dispatch) =>
	javaAcademyService
		.signIn({ username, password })
		.then(({ data: { id, permission, token, username } }) => {
			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.USER_TOKEN,
				token
			);

			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.REMEMBER_ME,
				JSON.stringify(rememberMeObj)
			);

			dispatch(
				setUser({
					id,
					permission,
					username,
				})
			);
		});

const authApi = {
	signIn,
};

export default authApi;
