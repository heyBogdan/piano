import {combineReducers} from 'redux'
import octave from './octaves.jsx'
import activeKey from './keys.jsx'

const pianoApp = combineReducers({
    octave,
    activeKey
}) 

export default pianoApp