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