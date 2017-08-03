const question = (state = {number:1, quantity:5, rightAnswers: 0}, action) => {
    switch (action.type){
        case 'INCREASE_QUESTION_NUMBER' :
            return Object.assign({}, state, {number:action.number});
        case 'SET_QUESTION_QUANTITY':
            return Object.assign({}, state, {quantity:action.quantity})
        case 'ADD_RIGHT_ANSWER':
            return Object.assign({}, state, {rightAnswers:action.rightAnswers})
        default : 
            return state;
    }
}

export default question