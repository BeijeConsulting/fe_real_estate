import storage from "../../common/utils/storage";

const SET_SAVED_ADS = "generic/user/SET_SAVED_ADS";
const SET_USER_ME = "generic/user/SET_USER_ME";
const SET_USER_DATA = "generic/user/SET_USER_DATA";
const LOGOUT = "generic/user/LOGOUT";

// return only id, username
const setUser = ({ user, token, refreshToken }, rememberMeObj) => ({
	type: SET_USER_DATA,
	payload: {
		user,
		rememberMeObj,
		token,
		refreshToken,
	},
});

// return all user info
const setUserMe = (userObj) => ({
	type: SET_USER_ME,
	payload: userObj,
});

const setSavedAds = (saved) => ({
	type: SET_SAVED_ADS,
	payload: saved,
});

const logout = () => ({
	type: LOGOUT,
	payload: {},
});

const INIT_STATE = {
	user: {},
	userMe: {},
	savedAds: [],
};

const userMeDuck = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.USER_TOKEN,
				action.payload.token
			);
			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN,
				action.payload.refreshToken
			);

			return { ...state, user: action.payload.user };

		case LOGOUT:
			localStorage.removeItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN);
			localStorage.removeItem(storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN);

			return { ...INIT_STATE };

		case SET_USER_ME:
			return { ...state, userMe: action.payload };

		case SET_SAVED_ADS:
			return { ...state, savedAds: action.payload };
		default:
			return state;
	}
};

export { setSavedAds, setUser, setUserMe, logout };

export default userMeDuck;
