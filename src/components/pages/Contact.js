import React, { useState } from "react";

const PageContact = () => {
    const [isUnder, setIsUnder] = useState();

    const mouseIn = () => {
        setIsUnder(true);
    };

    const mouseOut =()=>{
        setIsUnder(false);
    }

    return (
        <div className="containerPages">
            <div className="text">
                <h1>Contato</h1>
                <div className="formcontact">
                    <form>
                        <input placeholder="Nome"></input>
                        <input placeholder="Email"></input>
                        <textarea placeholder="Escreva aqui o seu texto..." style={{ height: '30vh' }}></textarea>
                    </form>

                </div>

                <div className="btnscontact">
                    <button ><i class="fa-brands fa-whatsapp" style={{ fontSize: '100px', color: '#003049' }} ></i></button>
                    <button className="btnsubmitcontact" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
                        <i className={isUnder ? "fa-solid fa-envelope fa-bounce": "fa-solid fa-envelope" } style={{ fontSize: '100px', color: '#003049' }} ></i>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PageContact;