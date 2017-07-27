import React from "react";
import Key from './Key.jsx';
import {setActiveKey} from '../actions/index.jsx'

class Keyboard extends React.Component{

    render(){
        const {store} = this.context;
        console.log('from keyboard',store.getState());
        return (
            <div>  
                <Key type="black" onclick="keyClickHandler" />
            </div>
        )     
    }
}

Keyboard.contextTypes = {
    store: React.PropTypes.object
};

export default Keyboard 