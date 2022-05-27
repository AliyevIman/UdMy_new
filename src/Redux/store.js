import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ChangeColorreducer } from "./reducers/ColorReducer";
import { applyMiddleware,combineReducers,createStore,configureStore } from "@reduxjs/toolkit";
const reducer=combineReducers({
colorReducer:ChangeColorreducer,
});
const InitialState={}

const middleware=[thunk];
const store =createStore(
    reducer,
    InitialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;