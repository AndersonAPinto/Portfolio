import React from "react";
import ImagemInfo from '../../fotos/testeimg.jpg';


const PageInfo = () => {
    return (
        <div className="containerPages">
            <div className="text">
                <h1>Sobre mim</h1>
                <div className="te">
                    <p id="textinfo">
                        Sou filho único, comecei a trabalhar aos 12 anos em uma oficina mecânica na minha cidade por buscar uma resolução
                        dos problemas financeiros da minha casa, um curioso nato, sempre gostei de entender o funcionamento das coisas,
                        e me encantei pela área automotiva. Há un ano decidi mudar de profissão para migrar de carreira para área da tecnologia,
                        me apaixonei pela programação, eu queria saber como funcionava e como homem e maquina conversam através de comandos e dados.
                        Eu quero ser programador para criar mais apps de ajuda, de entretenimento. Sentir parte de algo maior, e sem limites.
                    </p>
                    <div className="fotoinfo">
                        <img src={ImagemInfo} alt="Imagem Teste de fotos" />
                    </div>
                </div>
            </div>
        </div>


    );

    ;
}

export default PageInfo;