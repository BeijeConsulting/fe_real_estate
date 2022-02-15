import { combineReducers } from "redux";
//API
//DUCKs
import tokenDuck from "../ducks/tokenDuck";
import adminDuck from "../ducks/adminDuck";
import userMeDuck from "../ducks/userMeDuck";

const rootReducer = combineReducers({
	tokenDuck,
	adminDuck,
	userMeDuck,
});

export default rootReducer;
