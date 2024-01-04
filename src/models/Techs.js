import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faSquareJs, faHtml5, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Imagehtml from '../itens/icons-html.png';
import Imagecss from '../itens/icons-css.png';

const Techs = () => {
    return (
        <div className="tx bg-tech">
            <h1>Tecnologias</h1>
            <div className="txicons">
            <img src={Imagehtml} alt="item start" />
            <img src={Imagecss} alt="item start" />
                
                
                <FontAwesomeIcon icon={faSquareJs} size="2xl" />                
                <FontAwesomeIcon icon={faReact} size="2xl" />
                
            </div>

        </div>
    );
};

export default Techs;