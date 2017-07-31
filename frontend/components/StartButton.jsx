import React from 'react'
import {connect} from 'react-redux'
import {setAppStatus} from '../actions/index.js'

class StartButton extends React.Component{
    constructor(props){
        super(props);
        this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    }
    startButtonClickHandler(){
        const {store} = this.context;
        store.dispatch(setAppStatus('testPassing'));
    }
    render(){
        return(
            <div className={"piano-app__start-button" + 
                 (this.props.appStatus == 'preStart' ? '' : ' hidden')} 
                 onClick={this.startButtonClickHandler}>
                     
            </div>
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