import React, { useState } from "react";

const PageContact = () => {
    const [isUnder, setIsUnder] = useState();

    const mouseIn = () => {
        setIsUnder(true);
    };

    const mouseOut = () => {
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

                        <div className="btnscontact">
                            <button className="btnsubmitcontact" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
                                <i className={isUnder ? "fa-solid fa-envelope fa-bounce" : "fa-solid fa-envelope"} style={{ color: '#003049' }} ></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <button id="btnfootercontact" ><a href="https://api.whatsapp.com/send?phone=5551997802755&text=Ol%C3%A1%20tudo%20bem?%20Muito%20Prazer.%0AObrigado%20por%20entrar%20em%20contato.%0AEm%20breve%20retornarei%20a%20sua%20mensagem." target="_blank">
                        <i className="fa-brands fa-whatsapp fa-2xl" style={{ color: '#003049' }} ></i></a>
                    </button>
                    <button id="btnfootercontact" ><a href="https://www.linkedin.com/in/andersonapinto/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#003049' }}></i></a></button>
                    <button id="btnfootercontact" ><a href="https://github.com/AndersonAPinto" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: '#003049' }} ></i></a></button>
                    <button id="btnfootercontact" ><a href="https://www.instagram.com/andersonaugusto.pinto/" target="_blank"><i className="fa-brands fa-instagram fa-2xl" style={{ color: '#003049' }} ></i></a></button>
                    <button id="btnfootercontact" ><a href="https://t.me/AndersonAPinto" target="_blank"><i className="fa-brands fa-telegram fa-2xl" style={{ color: '#003049' }} ></i></a></button>

                </div>
            </div>
        </div>
    );
};

export default PageContact;