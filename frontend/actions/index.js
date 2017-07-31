export const setActiveKey = id => {
    return {
        type: 'SET_ACTIVE_KEY',
        id
    }
}

export const setOctaveNum = octaveNum => {
    return {
        type: 'SET_OCTAVE',
        octaveNum
    }
}

export const setAppStatus = status => {
    return {
        type: 'SET_STATUS',
        status
    }
}

export const setNoteToPlay = noteToPlay => {
    return {
        type: 'SET_NOTE_TO_PLAY',
        noteToPlay
    }
}