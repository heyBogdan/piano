import React from 'react'
import {connect} from 'react-redux'

class NextButton extends React.Component{
    render(){
        return(
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--next" +
                ((this.props.appStatus == 'nextQuestion') ? '' : ' control-buttons-wrapper__button--next-disabled')
            } >
                
            </div>
        )    
    }
}

NextButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus
    }
}
NextButton = connect(mapStateToProps)(NextButton);

export default NextButton