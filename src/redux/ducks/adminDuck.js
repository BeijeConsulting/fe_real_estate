// Actions
const SET_ADMIN = 'generic/adminDuck/SET_ADMIN'

// Action Creators
export function setAdmin(value) {
    return {
        type: SET_ADMIN,
        payload: {
            admin: value
        }
    };
}

const INIT_STATE = {
    admin: {}
}

// Reducer
export default function adminDuck(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_ADMIN:
            var newState = Object.assign({}, state);
            newState.admin = action.payload.admin
            return newState;
        default:
            return state;
    }
}
