import { combineReducers } from 'redux';

import authReducer from './auth_reducer'
import structureReducer from './structure_reducer'
 
 
// Combine all the reducers
const rootReducer = combineReducers({
    user: authReducer,
    structures: structureReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;