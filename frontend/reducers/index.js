import {combineReducers} from 'redux'
import octave from './octaves.js'
import activeKey from './keys.js'
import appStatus from './appStatus.js'

const pianoApp = combineReducers({
    octave,
    activeKey,
    appStatus
}) 

export default pianoApp