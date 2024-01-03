import React from "react";
import ImageWorks from '../itens/WebSiteConsumptionEletricCar.png'
import '../models/globaltext.css'

const Works = () =>
    <div className="tx">
        <h1>Trabalhos</h1>
        <div className="row">
            
            <div className="col-md-3"><img src={ImageWorks} className="img-fluid" /></div>
            <div className="col-md-3"><img src={ImageWorks} className="img-fluid" /></div>
            <div className="col-md-3"><img src={ImageWorks} className="img-fluid" /></div>
            <div className="col-md-3"><img src={ImageWorks} className="img-fluid" /></div>
        </div>

    </div>;

export default Works;