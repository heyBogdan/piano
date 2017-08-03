import React from 'react'
import {connect} from 'react-redux'
import octaveNotes from '../constants/octaveNotes.js'
import generateRandNumber from '../functions/generateRandNumber.js'
import {setAppStatus, setActiveKey, setNoteToPlay} from '../actions/index.js'

class StartButton extends React.Component{
    constructor(props){
        super(props);
        this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    }
    startButtonClickHandler(){
        const {store} = this.context;
        store.dispatch(setAppStatus('start'));
        store.dispatch(setActiveKey('null'));
        store.dispatch(setNoteToPlay(octaveNotes[generateRandNumber(octaveNotes.length)]));
    }
    render(){
        return(
            <a className="piano-app__start-button" 
               onClick={this.startButtonClickHandler}>
               Начать      
            </a>
        )    
    }
}

StartButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus
    }
}
StartButton = connect(mapStateToProps)(StartButton);

export default StartButton