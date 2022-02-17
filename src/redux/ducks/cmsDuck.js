const SET_TITLE = "cms/cmsDuck/SET_TITLE";
const SET_TO_IDLE = "generic/userMeDuck/SET_TO_IDLE";

const setHeaderTitle = (value) => ({
    type: SET_TITLE,
    payload: {
        title: value.toUpperCase(),
    },
});

/**
 * Used to log out.
 * NOTE: use `setToIdle()` instead of `setUser({})`, because additional
 * data reset could be added in the future. So it is better
 * to keep `logout` function as separated from single 'set' functions.
 */
const setToIdle = (value) => ({
    type: SET_TO_IDLE,
    payload: {
        title: value,
    },
});

const INIT_STATE = {
    payload: {},
};

const cmsDuck = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_TITLE:
            return { ...state, title: action.payload.title };

        case SET_TO_IDLE:
            return { ...state, user: action.payload.user };

        // case INIT_STATE:
        //     console.log('ci sono entrato', action.payload.title);
        //     return { ...state, title: action.payload.title };


        default:
            return state;
    }
};

export { setHeaderTitle, setToIdle };

export default cmsDuck;
