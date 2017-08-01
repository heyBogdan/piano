import {combineReducers} from 'redux'
import octave from './octaves'
import activeKey from './keys'
import appStatus from './appStatus'
import noteToPlay from './noteToPlay'
import playNote from './playNote'

const pianoApp = combineReducers({
    octave,
    activeKey,
    appStatus,
    noteToPlay,
    playNote
}) 

export default pianoApp