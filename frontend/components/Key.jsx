import React from "react";
import {connect} from "react-redux";
import {setActiveKey, playNote, setAppStatus, addAttempt} from "../actions/index.js"
import playKey from "../functions/playKey.js"


class Key extends React.Component{
    constructor(props){
        super(props);
        this.keyClickHandler = this.keyClickHandler.bind(this);
    }
    keyClickHandler(e){
        const {store} = this.context;
        store.dispatch(setActiveKey(e.target.getAttribute('data-note')));
        store.dispatch(addAttempt());
        playKey(e.target.getAttribute('data-note'));

        if(this.props.appStatus == 'start') store.dispatch(setAppStatus('waitingForAnswer'))
    }

    render(){
        return (
                <div className={
                        "keyboard__key " + ((this.props.note.indexOf('1') == -1) ? "" : "keyboard__key--sharp ") +
                         ((this.props.activeKey === this.props.note) ? "keyboard__key--active" : "") + 
                         ((this.props.appStatus == 'nextQuestion') && (this.props.note == this.props.noteToPlay) ? ' keyboard__key--right':'') +
                         ((this.props.appStatus == 'nextQuestion') && (this.props.activeKey == this.props.note) && (this.props.activeKey !== this.props.noteToPlay) ? ' keyboard__key--wrong':'')
                     }
                     onClick={this.keyClickHandler} 
                     data-note={this.props.note}>  
                </div>
        )     
    }
}

Key.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        activeKey:state.activeKey,
        appStatus:state.appStatus,
        noteToPlay:state.noteToPlay,
        playNote:state.playNote
    }
}

Key = connect(mapStateToProps)(Key);

export default Key