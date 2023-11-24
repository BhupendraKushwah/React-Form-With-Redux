import Reducers from "./Reducers/Allreducers";
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";

export const store = createStore(Reducers,{},applyMiddleware(thunk))
