import React from 'react'
import {connect} from 'react-redux'
import octaveNotes from '../constants/octaveNotes.js'
import generateRandNumber from '../functions/generateRandNumber.js'
import {setAppStatus, setActiveKey, increaseQuestionNumber, setNoteToPlay} from '../actions/index.js'

class NextButton extends React.Component{
    constructor(props){
        super(props);
        this.nextButtonClickHandler = this.nextButtonClickHandler.bind(this);
    }
    nextButtonClickHandler(){
        const {store} = this.context;

        if(this.props.question.number == this.props.question.quantity){
            store.dispatch(setAppStatus('finish'));
            store.dispatch(setActiveKey(null));
        }else{
            store.dispatch(increaseQuestionNumber())
            store.dispatch(setAppStatus('start'));
            store.dispatch(setActiveKey(null));
            store.dispatch(setNoteToPlay(octaveNotes[generateRandNumber(octaveNotes.length)]));
        }
    }
    render(){
        return(
            <button className={"buttons-wrapper__button buttons-wrapper__button--next"}
                    onClick={this.nextButtonClickHandler} 
                    disabled={this.props.appStatus == "nextQuestion" ? '' : 'true'}>
            </button>
        )    
    }
}

NextButton.contextTypes = {
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
NextButton = connect(mapStateToProps)(NextButton);

export default NextButton

