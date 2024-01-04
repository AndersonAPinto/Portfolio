import React, { useState } from "react";
import Start from "./models/Start";
import Aboutme from "./models/Aboutme";
import Techs from "./models/Techs";
import Contact from "./models/Contact";
import Works from "./models/Works";
import Imageabout from '../src/itens/sobremim.png';
import Imagehome from '../src/itens/home.png';
import Imagetech from '../src/itens/tech.png';
import Imageworks from '../src/itens/works.png';
import Imagecontact from '../src/itens/contact.png';


function Paginas() {
  const [trocarPag, settrocarPag] = useState('start');

  return (
    <div className="templates">
      
        {trocarPag === 'start' && <Start />}
        {trocarPag === 'aboutme' && <Aboutme />}
        {trocarPag === 'techs' && <Techs />}
        {trocarPag === 'contact' && <Contact />}
        {trocarPag === 'works' && <Works />}

        <div className="botoes">
          <img onClick={() => settrocarPag('start')} src={Imagehome} alt="item start" />
          <img onClick={() => settrocarPag('aboutme')} src={Imageabout} alt="item aboutme" />
          <img onClick={() => settrocarPag('techs')} src={Imagetech} alt="item techs" />
          <img onClick={() => settrocarPag('contact')} src={Imagecontact} alt="item contact" />
          <img onClick={() => settrocarPag('works')} src={Imageworks} alt="item works" />
        </div>
      

    </div>
  );
}

export default Paginas;
