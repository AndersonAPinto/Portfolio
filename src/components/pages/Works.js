import React from "react";
import ImageworkTesteEnglish from '../../fotos/WebSite(Englistest).png'
import ImageworkEletricCar from '../../fotos/WebSiteConsumptionEletricCar.png'
import ImageGadj from '../../fotos/Site Gadj.png'
const PageWorks = () => {

    return (
        <div className="containerPages">
            <div className="text">
                <h1>Trabalhos</h1>
            </div>
            <div className="fotoworks">
                <div className="framefotos"><img src={ImageworkTesteEnglish} className="settingspictures"/><h6>Site Teste de Inglês</h6></div>
                <div className="framefotos"><img src={ImageworkEletricCar} className="settingspictures"/><h6>EM ANDAMENTO </h6></div>
                <div className="framefotos"><img src={ImageGadj} className="settingspictures"/><h6>EM ANDAMENTO</h6></div>
                <div className="framefotos"><h6>EM BREVE</h6></div>
                
            </div>
        </div>
    );
};

export default PageWorks;