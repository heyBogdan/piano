import React from "react";

class Key extends React.Component{
    render(){

        if(this.props.note.indexOf('#') == -1){
            return (
                <div className="keyboard__key">  
                </div>
            )     
        }else{
             return (
                <div className="keyboard__key keyboard__key--sharp">  
                </div> 
            )              
        }
    }
}

Key.contextTypes = {
    store: React.PropTypes.object
};


export default Key