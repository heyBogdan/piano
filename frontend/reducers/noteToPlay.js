const noteToPlay = (state = null, action) => {
    switch (action.type){
        case 'SET_NOTE_TO_PLAY' :
            return action.noteToPlay;
        default : 
            return state;
    }
}

export default noteToPlay