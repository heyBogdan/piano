import React from "react";
import {connect} from 'react-redux';

class Counter extends React.Component {
    render(){   
        return(
            <div className="main-wrapper__counter">
                вопрос {this.props.question.number} из {this.props.question.quantity} 
            </div>
        )   
    }
}

Counter.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        question:state.question
    }
}
Counter = connect(mapStateToProps)(Counter);

export default Counter