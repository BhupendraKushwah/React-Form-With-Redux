import {combineReducers} from 'redux';
import submitReducer from './submitReducer';

const Reducers =combineReducers({
    submit:submitReducer,

})
export default Reducers