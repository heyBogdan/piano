import React from "react";

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <p className="footer__caption">Developed by Bokhonov Bogdan</p>
                <p className="footer__contacts">bokhonovb@gmail.com | +7 (977) 880-58-77</p>
                <div className="social-networks">
                    <a className="social-networks__button social-networks__button--gh" href="">
                    </a>
                    <a className="social-networks__button social-networks__button--fb" href="">
                    </a>
                    <a className="social-networks__button social-networks__button--tw" href="">
                    </a>
                </div>  
            </div>
        )     
    }
}

export default Footer