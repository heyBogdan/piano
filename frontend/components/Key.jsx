import React from "react";
import {connect} from "react-redux";
import {setActiveKey} from "../actions/index.jsx"

class Key extends React.Component{
    constructor(props){
        super(props);
        this.keyClickHandler = this.keyClickHandler.bind(this);
    }
    keyClickHandler(e){
        const {store} = this.context;
        e.target.firstElementChild.load();
        e.target.firstElementChild.play();
        store.dispatch(setActiveKey(e.target.getAttribute('data-note')));
    }
    render(){
        return (
                <div className={
                        "keyboard__key " + ((this.props.note.indexOf('1') == -1) ? "" : "keyboard__key--sharp ") +
                         ((this.props.activeKey === this.props.note) ? "keyboard__key--active" : "")
                     }
                     onClick={this.keyClickHandler} 
                     data-note={this.props.note}>  
                    <audio id={"note-" + this.props.note}>
                        <source src={"/public/Notes/" + this.props.note + ".mp3"} type='audio/mpeg; codecs="mp3"' />
                    </audio>            
                </div>
        )     
    }
}

Key.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        activeKey:state.activeKey
    }
}

Key = connect(mapStateToProps)(Key);

export default Key