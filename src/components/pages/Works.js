import React from "react";
import ImageworkTesteEnglish from '../../fotos/WebSite(Englistest).png'
import ImageworkEletricCar from '../../fotos/WebSiteConsumptionEletricCar.png'
import ImageGadj from '../../fotos/Site Gadj.png'
const PageWorks = () => {

    return (
        <div className="containerPages">
            <div className="text">
                <h1>Trabalhos</h1>

                <div className="fotoworks">
                    <div className="framefotos"><img src={ImageworkTesteEnglish}  className="settingspictures"/><h5>Site Teste de Inglês</h5></div>
                    <div className="framefotos"><picture><img src={ImageworkEletricCar} className="settingspictures" /></picture><h5>EM ANDAMENTO </h5></div>
                    <div className="framefotos"><a href='https://gadjferramentas.com.br' target="_blank"><img src={ImageGadj} className="settingspictures" /></a><h5>EM ANDAMENTO</h5></div>
                    <div className="framefotos"><h5>EM BREVE</h5></div>
                </div>
            </div>
        </div>
    );
};

export default PageWorks;