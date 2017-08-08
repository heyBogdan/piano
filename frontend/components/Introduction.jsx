import React from "react";
import AudioPlayer from './AudioPlayer.jsx';
import StartButton from './StartButton.jsx';

class Introduction extends React.Component{
    render(){
        return (
            <div className="modal-window">
                <p className="modal-window__caption">Прослушайте аудиосэмл, выберите идентичную ноту, подтвердите выбор. Старайтесь сделать как можно меньше попыток при выборе ноты!</p>
                <AudioPlayer />
                <StartButton /> 
            </div>
        )     
    }
}

export default Introduction