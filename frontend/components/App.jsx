import React from "react";
import PlayButton from "./PlayButton.jsx";
import AnswerButton from "./AnswerButton.jsx";
import Keyboard from './Keyboard.jsx';
import StartButton from './StartButton.jsx';

const App = () => {

    return(
        <div className="main-wrapper">
            <h3>PianoApp</h3>
            <div className="piano-app">
                <div className="control-buttons-wrapper">
                    <PlayButton />
                    <AnswerButton />
                </div>
                <Keyboard />
                <StartButton />
            </div>
            <p>Made by <a href="https://github.com/heyBogdan">@hey_bogdan</a></p>
        </div>
    )
}

export default App