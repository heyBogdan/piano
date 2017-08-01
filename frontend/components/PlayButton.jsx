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
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--play" +
                 (this.props.appStatus == 'preStart' ? ' control-buttons-wrapper__button--play-disabled' : '')}
                 onClick={this.playButtonClickHandler}>
            </div>
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