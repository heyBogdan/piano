import React from "react";
import {setActiveKey} from "../actions/index.jsx"

class Key extends React.Component{
    keyClickHandler(e){
        e.target.firstElementChild.load();
        e.target.firstElementChild.play();
    }
    render(){
        return (
                <div className={"keyboard__key " + ((this.props.note.indexOf('1') == -1) ? "" : "keyboard__key--sharp")}
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


export default Key