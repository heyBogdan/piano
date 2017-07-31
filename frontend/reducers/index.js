import {combineReducers} from 'redux'
import octave from './octaves'
import activeKey from './keys'
import appStatus from './appStatus'
import noteToPlay from './noteToPlay'

const pianoApp = combineReducers({
    octave,
    activeKey,
    appStatus,
    noteToPlay
}) 

export default pianoApp