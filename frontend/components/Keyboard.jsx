import React from "react";
import {connect} from 'react-redux';
import Key from './Key.jsx';
import {setActiveKey} from '../actions/index.jsx'
import octaveNotes from '../constants/octaveNotes.js'

class Keyboard extends React.Component{

    render(){
        let octaves = octaveNotes.map((value,id) => (
                <Key key={id} octave={this.props.octave} note={value} />
            )
        )
        return (
            <div>  
                {octaves}
            </div>
        )     
    }
}



Keyboard.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        octave:state.octave
    }
}
Keyboard = connect(mapStateToProps)(Keyboard);

export default Keyboard 