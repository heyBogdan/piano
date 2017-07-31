import React from 'react'
import {connect} from 'react-redux'


class PlayButton extends React.Component{

    render(){
        return(
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--play" +
                (this.props.appStatus == 'preStart' ? ' control-buttons-wrapper__button--play-disabled' : '')}
                
            >
            
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
        noteToPlay:state.noteToPlay
    }
}
PlayButton = connect(mapStateToProps)(PlayButton);
export default PlayButton