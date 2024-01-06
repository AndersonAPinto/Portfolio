import React, {useState} from "react";

const Footer = () => {
    const [isUnder, setIsUnder] = useState();

    const mouseIn = () => {
        setIsUnder(true);
    };

    const mouseOut =()=>{
        setIsUnder(false);
    }

    return(
    <footer>
        <div className="containerfooter">
            <div className="menufooter" >
                <button id="btnfooter" onMouseEnter={mouseIn} onMouseLeave={mouseOut}><i className={isUnder ? "fa-brands fa-linkedin fa-bounce" :"fa-brands fa-linkedin"} style={{ color: '#003049'}}></i></button>
                <button id="btnfooter" onMouseEnter={mouseIn} onMouseLeave={mouseOut}><i className={isUnder ? "fa-brands fa-github fa-bounce":"fa-brands fa-github"} style={{  color: '#003049' }} ></i></button>
                <button id="btnfooter" onMouseEnter={mouseIn} onMouseLeave={mouseOut}><i className={isUnder ? "fa-brands fa-instagram fa-bounce":"fa-brands fa-instagram"}  style={{ color: '#003049' }} ></i></button>
                <button id="btnfooter" onMouseEnter={mouseIn} onMouseLeave={mouseOut}><i className={isUnder ? "fa-brands fa-telegram fa-bounce":"fa-brands fa-telegram"} style={{ color: '#003049' }} ></i></button>

            </div>
        </div>
    </footer>
    );
};

export default Footer;