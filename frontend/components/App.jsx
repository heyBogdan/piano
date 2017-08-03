import React from "react";
import {connect} from 'react-redux';
import PlayButton from "./PlayButton.jsx";
import AnswerButton from "./AnswerButton.jsx";
import Keyboard from './Keyboard.jsx';
import StartButton from './StartButton.jsx';
import NextButton from './NextButton.jsx'

class App extends React.Component {
    render(){
        let renderBlock; 
        switch (this.props.appStatus){
            case 'introduction': 
                renderBlock = <div>Привет</div>
                break
           case 'finish': 
                renderBlock = <div>Пока</div>
                break
           
           default: renderBlock = (
               <div className="piano-app">
                   <div className="control-buttons-wrapper">
                       <PlayButton />
                       <AnswerButton />
                       <NextButton />
                   </div>
                   <Keyboard />
                   <StartButton />
               </div>);
               break
        }     
        console.log(renderBlock); 
        return(
            <div className="main-wrapper">
                <h3>PianoApp</h3>
                {renderBlock}
                <p>Made by <a href="https://github.com/heyBogdan">@hey_bogdan</a></p>
            </div>
        )   
    }
}


App.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps (state){
    return{
        appStatus:state.appStatus
    }
}
App = connect(mapStateToProps)(App);

export default App