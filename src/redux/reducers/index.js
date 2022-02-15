import { combineReducers } from "redux";

import userMeDuck from "../ducks/userMeDuck";

const rootReducer = combineReducers({
	userMeDuck,
});

export default rootReducer;
