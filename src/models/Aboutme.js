import React from "react";
import ImageAbout from '../itens/sobremim.png';


const Aboutme = () =>
    <div className="tx bg-about">
        <h1>Sobre Mim</h1>
        <div className="templateGlobal">

            <p>
            Iniciei minha carreira aos 12 anos em uma oficina mecânica, movido pela paixão automotiva e pela necessidade de 
            resolver problemas financeiros familiares. Com o tempo, me tornei especialista em scanners automotivos e software. 
            Quatro anos atrás, mudei de carreira, fascinado pela programação, e agora aspiro ser um desenvolvedor de aplicativos,
             buscando criar soluções inovadoras e entretenimento
            </p>
            <img src={ImageAbout} className="img-fluid width:50%" />

        </div>
    </div>

export default Aboutme;