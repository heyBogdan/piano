import React from "react";
import {connect} from 'react-redux';

class Counter extends React.Component {
    render(){   
        return(
            <div className="main-wrapper">
                вопрос {this.question.number} из {this.question.quantity} 
            </div>
        )   
    }
}

App.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        question:state.question
    }
}
Counter = connect(mapStateToProps)(Counter);

export default Counter