import { combineReducer } from 'redux'
import tick from './tick'

const rootReducer = combineReducer({
    tick:tick
})

export default rootReducer