const octaves = (state = 1, action) => {
    switch (action.type){
        case 'SET_OCTAVE' :
            return action.octaveNum;
        default : 
            return state;
    }

}

export default octaves