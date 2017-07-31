import React from 'react'
import {connect} from 'react-redux'

class AnswerButton extends React.Component{
    render(){
        return(
            <div className={"control-buttons-wrapper__button control-buttons-wrapper__button--answer" +
                ((this.props.appStatus == 'readyForAnswer') ? '' : ' control-buttons-wrapper__button--answer-disabled')
            } >
                
            </div>
        )    
    }
}

AnswerButton.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus
    }
}
AnswerButton = connect(mapStateToProps)(AnswerButton);

export default AnswerButton