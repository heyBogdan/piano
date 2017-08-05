import React from 'react'
import {connect} from 'react-redux'
import {setAppStatus, setQuestionNumber, addRightAnswer} from '../actions/index.js'

class AnswerButton extends React.Component{
    constructor(props){
        super(props);
        this.answerButtonClickHandler = this.answerButtonClickHandler.bind(this);
    }
    answerButtonClickHandler(){
        const {store} = this.context;
        
        if(this.props.activeKey == this.props.noteToPlay) store.dispatch(addRightAnswer());    
        
        store.dispatch(setAppStatus('nextQuestion'))

    }
    render(){
        return(
            <button className={"buttons-wrapper__button buttons-wrapper__button--answer"} 
                    onClick={this.answerButtonClickHandler}
                    disabled={this.props.appStatus == "waitingForAnswer" ? '' : 'true'}>
            </button>
        )    
    }
}

AnswerButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus,
        question:state.question,
        noteToPlay:state.noteToPlay,
        activeKey:state.activeKey
    }
}
AnswerButton = connect(mapStateToProps)(AnswerButton);

export default AnswerButton