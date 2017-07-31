const keys = (state = null, action) => {
    switch (action.type){
        case 'SET_ACTIVE_KEY' :
            return action.id;
        default : 
            return state;
    }
}

export default keys