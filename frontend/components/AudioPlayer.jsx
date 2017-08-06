import React from "react";

class AudioPlayer extends React.Component{

    render(){
        return (
                <video className="modal-window__player" width="90%" autoPlay loop>
                    <source src="videos/tutorial.webm" type="video/webm" />
                    <source src="videos/tutorial.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        )     
    }
}


export default AudioPlayer