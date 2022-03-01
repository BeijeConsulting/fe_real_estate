import { applyMiddleware, compose, createStore } from "redux";

import logger from "redux-logger";
import rootReducer from "./redux/reducers/index";
import thunk from "redux-thunk";




let middlewares = [thunk];
if (process.env && process.env.NODE_ENV !== "production") {
	//if (process.env.REDUX_LOGGER === 'enabled' && process.env.mode !== 'production') {
	middlewares = [...middlewares, logger];
	//}
}
// logger, thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const applicationStore = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default applicationStore;
