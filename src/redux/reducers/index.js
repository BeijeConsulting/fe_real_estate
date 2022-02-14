import { combineReducers } from "redux";
//API
//DUCKs
import tokenDuck from "../ducks/tokenDuck";
import adminDuck from "../ducks/adminDuck";

const rootReducer = combineReducers({
	tokenDuck,
	adminDuck,
});
export default rootReducer;
