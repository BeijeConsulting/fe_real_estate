import javaAcademyService from "../javaAcademyService";
import storage from "../../common/utils/storage";
import { logout, setUser } from "../../redux/ducks/userMeDuck";

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

const updateAuthToken = async (dispatch) => {
	const refreshToken = localStorage.getItem(
		storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN
	);

	if (!refreshToken) {
		dispatch(logout());
		throw new Error("No user authentication method");
	}

	return javaAcademyService.updateAuthToken(refreshToken).then(({ data }) => {
		dispatch(setUser(deconstructAuthBodyToDispatch(data)));

		return { token: data.token };
	});
};

/**
 * Given an api call `authorizedApi` taking the auth token, the call is triggered,
 * if token is null or is expired (code: 401), a refresh-token api call is triggered.
 * Then, if a new token is returned, it will be used to retry the original call,
 * otherwise
 * @param {(token:string)=>Promise<any>} authorizedApi An api requiring auth token as parameter
 * @param { () => {} } dispatch the redux dispatch
 * @returns
 */
const retryAfterRefreshToken = async (authorizedApi, dispatch) => {
	const token = localStorage.getItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN);

	// token does not exist
	if (!token) {
		// refresh token
		return (
			updateAuthToken(dispatch)
				// and try
				.then(({ token: tokenNew }) => authorizedApi(tokenNew))
		);
	}

	const firstRes = await authorizedApi(token).catch((err) => err.response);

	// token still valid, some other error occurred
	if (firstRes.status !== 401) {
		return new Promise((resolve, reject) =>
			firstRes.status > 199 && firstRes.status < 300
				? resolve(firstRes)
				: reject({ response: firstRes })
		);
	}

	// token exists but it is expired
	// refresh token
	return (
		updateAuthToken(dispatch)
			// and retry
			.then(({ token: tokenNew }) => authorizedApi(tokenNew))
	);
};

const authApi = {
	signIn,
	updateAuthToken,
	retryAfterRefreshToken,
};

export default authApi;
