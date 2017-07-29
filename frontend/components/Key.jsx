import React from "react";

class Key extends React.Component{
    render(){

        if(this.props.note.indexOf('#') == -1){
            return (
                <div className="keyboard__key">  
                    Белая
                </div>
            )     
        }else{
             return (
                <div className="keyboard__key">  
                    Чёрная
                </div> 
            )              
        }
    }
}

Key.contextTypes = {
    store: React.PropTypes.object
};


export default Key