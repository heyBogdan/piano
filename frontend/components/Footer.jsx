import React from "react";

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <p className="footer__caption">Developed by Bokhonov Bogdan</p>
                <p className="footer__contacts">bokhonovb@gmail.com | +7 (977) 880-58-77</p>
                <div className="social-networks">
                    <a className="social-networks__button social-networks__button--gh" href="https://github.com/heyBogdan" target="_blank">
                    </a>
                    <a className="social-networks__button social-networks__button--fb" href="https://www.facebook.com/profile.php?id=100005185458628" target="_blank">
                    </a>
                    <a className="social-networks__button social-networks__button--tw" href="https://twitter.com/hey_bogdan" target="_blank">
                    </a>
                </div>  
            </div>
        )     
    }
}

export default Footer