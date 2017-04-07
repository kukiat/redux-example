import { combineReducers  } from 'redux'
import tick from './tick'

const rootReducer = combineReducers ({
    tick:tick
})

export default rootReducer