import React from "react";
import {connect} from 'react-redux';
import PlayButton from "./PlayButton.jsx";
import AnswerButton from "./AnswerButton.jsx";
import Keyboard from './Keyboard.jsx';
import StartButton from './StartButton.jsx';
import NextButton from './NextButton.jsx'
import AudioPlayer from './AudioPlayer.jsx'

class App extends React.Component {
    render(){
        let renderBlock; 
        switch (this.props.appStatus){
            case 'preStart': 
                renderBlock = (
                    <div className="modal-window">
                        <p className="modal-window__caption">Прослушайте аудиосэмл, выберите идентичную ноту, подтвердите выбор. Старайтесь сделать как можно меньше попыток при выборе ноты!</p>
                        <AudioPlayer />
                        <StartButton /> 
                    </div>
                )  
                break
           case 'finish': 
                renderBlock = (
                    <div className="modal-window">
                        <p className="modal-window__caption">Отличная Работа!</p>
                    </div>
                )
                break
           
           default: renderBlock = (
               <div className="piano-app">
                   <div className="control-buttons-wrapper">
                       <PlayButton />
                       <AnswerButton />
                       <NextButton />
                   </div>
                   <Keyboard />
               </div>);
               break
        }     
        return(
            <div className="main-wrapper">
                <h3>PianoApp</h3>
                {renderBlock}
                <p>Made by Bokhonov Bogdan</p>
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