import React from 'react'
import {connect} from 'react-redux'
import {setAppStatus, setActiveKey, increaseQuestionNumber} from '../actions/index.js'

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
        }
    }
    render(){
        return(
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--next" +
                 ((this.props.appStatus == 'nextQuestion') ? '' : ' control-buttons-wrapper__button--next-disabled')}
                 onClick={this.nextButtonClickHandler} >
                
            </div>
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