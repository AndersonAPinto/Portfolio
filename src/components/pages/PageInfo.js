import React from "react";
import ImagemInfo from '../../fotos/WhatsApp4.png';



const PageInfo = () => {
    return (
        <div className="containerPages">
            <div className="text">
                <h1>Sobre mim</h1>
                <div className="containerParagrafo">
                    <p id="textinfo">
                        Sou filho único, comecei a trabalhar aos 12 anos em uma oficina mecânica na minha cidade por buscar uma resolução
                        dos problemas financeiros da minha casa, um curioso nato, sempre gostei de entender o funcionamento das coisas,
                        e me encantei pela área automotiva. Há dois anos decidi mudar de profissão e migrar de carreira para área da tecnologia,
                        me apaixonei pela programação, eu queria saber como era essa conversa através de códigos e dados.
                        Eu quero ser Desenvolvedor para resolver outros desafios e problemas. Quero fazer parte de algo maior, e sem limites.
                    </p>
                    <div className="fotoinfo">
                        <img src={ImagemInfo} id="fotoInfo" />
                    </div>
                </div>
            </div>
        </div>


    );

    ;
}

export default PageInfo;