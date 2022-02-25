const SET_LANG = "generic/user/SET_EN";

const setLang = (lang) => ({
    type: SET_LANG,
    payload: lang,
});


const INIT_STATE = {
    payload: 'en',
};

const translationDuck = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_LANG:
            return { ...state, payload: action.payload };

        default:
            return state;
    }
};

export { setLang }

export default translationDuck