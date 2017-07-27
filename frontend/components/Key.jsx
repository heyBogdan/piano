import React from "react";

class Key extends React.Component{
    render(){
        if(this.props.type === 'black'){
            return (
                <div className="keybord__key">  
                    Чёрная!
                </div>
            )     
        }else{
             return (
                <div className="keybord__key">  
                    Другая!
                </div> 
            )              
        }
    }
}

export default Key