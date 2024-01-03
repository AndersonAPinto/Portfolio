import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import '../models/globaltext.css'

const Techs = () => {
    return (
        <div className="tx bg-tech">
            <h1>Tecnologias</h1>
                <FontAwesomeIcon icon={faCss3} size="2xl"/>

        </div>
    );
};

export default Techs;