import React from "react";
import './content.css';


const Content = () => {

    return (
        <div className="containerContent">
            <div className="circle-container">
                <div className="icon"><i class="fa-solid fa-circle-info"></i></div>
                <div className="icon"><i class="fa-solid fa-laptop-code"></i></div>
                <div className="icon"><i class="fa-solid fa-briefcase"></i></div>
                <div className="icon"><i class="fa-brands fa-whatsapp"></i></div>
                <div className="icon"><i class="fa-solid fa-house"></i></div>
            </div>
        </div>
    );
};

export default Content;
