// third-party
import { combineReducers } from 'redux';

// project import
import auth from './authentication';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ auth });

export default reducers;
