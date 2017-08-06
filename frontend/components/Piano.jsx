import React from "react";
import PlayButton from "./PlayButton.jsx";
import AnswerButton from "./AnswerButton.jsx";
import Keyboard from './Keyboard.jsx';
import NextButton from './NextButton.jsx';

class Piano extends React.Component{
    render(){
        return(
            <div className="piano-app">
                <div className="buttons-wrapper">
                    <PlayButton />
                    <AnswerButton />
                    <NextButton />
                </div>
                <Keyboard />
            </div>
        )     
    }
}

export default Piano