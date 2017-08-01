const playNote = (state = null, action) => {
    switch (action.type){
        case 'PLAY_NOTE' :
            return action.playingNote;
        default : 
            return state;
    }
}

export default playNote