const question = (state = {number:1, question:5}, action) => {
    switch (action.type){
        case 'SET_QUESTION_NUMBER' :
            return Object.assign({},state,{qustionNumber:action.number});
        case 'SET_QUESTION_QUANTITY':
            return Object.assign({},state,{questionQuantity:action.quantity})
        default : 
            return state;
    }
}

export default question