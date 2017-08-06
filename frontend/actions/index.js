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
let number = 1;
export const increaseQuestionNumber = () => {
    return{
        type: 'INCREASE_QUESTION_NUMBER',
        number:++number
    }
}
let rightAnswers = 0;
export const addRightAnswer = () => {
    return{
        type: 'ADD_RIGHT_ANSWER',
        rightAnswers:++rightAnswers
    }
} 
let attemptsNumber = 0;
export const addAttempt = () => {
    return{
        type: 'ADD_ATTEMPT',
        attemptsNumber:++attemptsNumber
    }
} 

export const resetQuestion = () => {
    attemptsNumber = 0;
    number = 1;
    rightAnswers = 0;
    return{
        type:'RESET_QUESTION'
    }
}