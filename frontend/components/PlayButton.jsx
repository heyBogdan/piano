import React from 'react'
import {connect} from 'react-redux'
import {playNote} from '../actions/index.js'
import playKey from "../functions/playKey.js"

class PlayButton extends React.Component{
    constructor(props){
        super(props);
        this.playButtonClickHandler = this.playButtonClickHandler.bind(this);
    }
    playButtonClickHandler(){
        const { store } = this.context;
        playKey(this.props.noteToPlay);
    }
    render(){
        return(
            <button className={"buttons-wrapper__button buttons-wrapper__button--play"}
                    onMouseDown={this.playButtonClickHandler}>
            </button>
        )    
    }
}


PlayButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus,
        noteToPlay:state.noteToPlay,
        playNote:state.playNote
    }
}

PlayButton = connect(mapStateToProps)(PlayButton);
export default PlayButton