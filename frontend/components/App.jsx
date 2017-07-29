import React from "react";
import Keyboard from './Keyboard.jsx';

const App = () => {

    return(
        <div className="main-wrapper">
            <h3>PianoApp</h3>
            <Keyboard/>
            <p>Made by <a href="https://github.com/heyBogdan">@hey_bogdan</a></p>
        </div>
    )
}

export default App