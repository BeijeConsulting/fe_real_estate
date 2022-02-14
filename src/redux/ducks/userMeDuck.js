const SET_USER_DATA = "userMeDuck/SET_USER_DATA";
const SET_TO_IDLE = "userMeDuck/SET_TO_IDLE";

const setUser = (user) => ({
	type: SET_USER_DATA,
	payload: {
		user,
	},
});

/**
 * Used to log out.
 * NOTE: use `setToIdle()` instead of `setUser({})`, because additional
 * data reset could be added in the future. So it is better
 * to keep `logout` function as separated from single 'set' functions.
 */
const setToIdle = () => ({
	type: SET_TO_IDLE,
	payload: {
		user: {},
	},
});

const INIT_STATE = {
	user: {},
};

const userMeDuck = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, user: action.payload.user };

		case SET_TO_IDLE:
			return { ...state, user: action.payload.user };

		default:
			return state;
	}
};

export { setUser, setToIdle };

export default userMeDuck;
