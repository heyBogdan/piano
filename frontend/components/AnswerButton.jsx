import React from 'react'
import {connect} from 'react-redux'
import {setAppStatus, setQuestionNumber} from '../actions/index.js'

class AnswerButton extends React.Component{
    constructor(props){
        super(props);
        this.answerButtonClickHandler = this.answerButtonClickHandler.bind(this);
    }
    answerButtonClickHandler(){
        const {store} = this.context;
        console.log(this.props.question.number,this.props.question.quantity)
        if(this.props.question.number == this.props.question.quantity){
            store.dispatch(setAppStatus('finish'))
        }else{
            store.dispatch(setAppStatus('nextQuestion'))
            let nextQuestion = this.props.question.number++;
            console.log(nextQuestion);
            store.dispatch(setQuestionNumber(nextQuestion))
        }
    }
    render(){
        return(
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--answer" +
                 ((this.props.appStatus == 'waitingForAnswer') ? '' : ' control-buttons-wrapper__button--answer-disabled')} 
                 onClick={this.answerButtonClickHandler}
            >
                
            </div>
        )    
    }
}

AnswerButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus,
        question:state.question
    }
}
AnswerButton = connect(mapStateToProps)(AnswerButton);

export default AnswerButton