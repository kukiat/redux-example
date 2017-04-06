import { combineReducers } from 'redux'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
const rootReducer = combineReducers({
    tick:addReducer,
    wd:deleteReducer
})
export default rootReducer