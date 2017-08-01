import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux";
import {setActiveKey} from "../actions/index.js";
import octaveNotes from '../constants/octaveNotes.js';

const playKey = (audio) => {
    audio.load();
    audio.play();
}



class AudioSources extends React.Component{
    componentWillUpdate() {
        const values = {}; 

        Object.keys(this.refs)
            .forEach(key => {
                 values[key] = ReactDOM.findDOMNode(this.refs[key]) || null;
            });

        if(this.props.playNote) values[this.props.playNote].play();
    }
    render(){
        let audioSources = octaveNotes.map((value, id) => {
            return (
                <audio key={id} ref={value} >
                        <source src={"/public/Notes/" + value + ".mp3"} type='audio/mpeg; codecs="mp3"' />
                </audio> 
            )
        })
        return (
                <div>
                    {audioSources}        
                </div>
        )     
    }
}

AudioSources.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        playNote:state.playNote
    }
}

AudioSources = connect(mapStateToProps)(AudioSources);

export default AudioSources

// ref={(audio) => {this.{value} = audio}}