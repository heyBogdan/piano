import {combineReducers} from 'redux'
import octaves from './octaves.jsx'
import keys from './keys.jsx'

const pianoApp = combineReducers({
    octaves,
    keys
}) 

export default pianoApp