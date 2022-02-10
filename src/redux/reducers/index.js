import { combineReducers } from "redux";
//API
//DUCK
import tokenDuck from "../ducks/tokenDuck";
const rootReducer = combineReducers({
	tokenDuck,
});
export default rootReducer;
