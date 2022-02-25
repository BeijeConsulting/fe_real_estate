import { combineReducers } from "redux";
//API
//DUCKs
import tokenDuck from "../ducks/tokenDuck";
import adminDuck from "../ducks/adminDuck";
import userMeDuck from "../ducks/userMeDuck";
import cmsDuck from "../ducks/cmsDuck";
import translationDuck from "../ducks/translationDuck"

const rootReducer = combineReducers({
	tokenDuck,
	adminDuck,
	userMeDuck,
	cmsDuck,
	translationDuck,
});

export default rootReducer;
