const status = (state = 'preStart', action) => {
    switch (action.type){
        case 'SET_STATUS' :
            return action.status;
        default : 
            return state;
    }
}

export default status