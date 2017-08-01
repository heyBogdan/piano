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

export const playNote = playingNote => {
    return{
        type: 'PLAY_NOTE',
        playingNote
    }
}

export const setQuestionNumber = question => {
    return{
        type: 'SET_QUESTION_NUMBER',
        question
    }
}