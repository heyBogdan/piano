import React from "react";
import {connect} from "react-redux";
import {setActiveKey, playNote} from "../actions/index.js"


class Key extends React.Component{
    constructor(props){
        super(props);
        this.keyClickHandler = this.keyClickHandler.bind(this);
    }
    keyClickHandler(e){
        const {store} = this.context;
        store.dispatch(setActiveKey(e.target.getAttribute('data-note')));
        store.dispatch(playNote(e.target.getAttribute('data-note')));
    }
    render(){
        return (
                <div className={
                        "keyboard__key " + ((this.props.note.indexOf('1') == -1) ? "" : "keyboard__key--sharp ") +
                         ((this.props.activeKey === this.props.note) ? "keyboard__key--active" : "")
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
        noteToPlay:state.noteToPlay
    }
}

Key = connect(mapStateToProps)(Key);

export default Key