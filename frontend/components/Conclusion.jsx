import React from "react";
import {connect} from 'react-redux';
import StartButton from './StartButton.jsx';

class Conclusion extends React.Component{
    render(){
        return (
            <div className="modal-window">
                <p className="modal-window__caption">
                  Вы ответили правильно на {this.props.question.rightAnswers} из {this.props.question.quantity} вопросов!
                </p>
                <p className="modal-window__caption">
                  При этом среднее количество попыток при ответе на вопрос
                  равняется {this.props.question.attemptsNumber / this.props.question.quantity} 
                </p>
                <p className="modal-window__caption">
                  Помните, что слух, особенно относительный, отлично поддаётся тренировке.
                  Попробуйте ещё раз!
                </p>
                <StartButton />   
            </div>
        )     
    }
}

Conclusion.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        question:state.qustion
    }
}

Conclusion = connect(mapStateToProps)(Conclusion);


export default Conclusion