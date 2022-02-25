import storage from "../../common/utils/storage";

const SET_USER_DATA = "generic/user/SET_USER_DATA";
const LOGOUT = "generic/user/LOGOUT";

const setUser = (user, rememberMeObj, token) => ({
	type: SET_USER_DATA,
	payload: {
		user,
		rememberMeObj,
		token,
	},
});

const logout = () => ({
	type: LOGOUT,
	payload: {},
});

const INIT_STATE = {
	user: {},
};

const userMeDuck = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.USER_TOKEN,
				action.payload.token
			);
			console.log(action.payload.token);
			localStorage.setItem(
				storage.LOCAL_STORAGE_KEYS.REMEMBER_ME,
				JSON.stringify(action.payload.rememberMeObj)
			);

			return { ...state, user: action.payload.user };

		case LOGOUT:
			localStorage.removeItem(storage.LOCAL_STORAGE_KEYS.USER_TOKEN);

			return { ...state, user: {} };

		default:
			return state;
	}
};

export { setUser, logout };

export default userMeDuck;
