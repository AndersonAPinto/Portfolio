import React, { useState } from "react";
import Start from "./models/Start";
import Aboutme from "./models/Aboutme";
import Techs from "./models/Techs";
import Contact from "./models/Contact";
import Works from "./models/Works";
import '../src/app.css'


function Paginas() {
  const [trocarPag, settrocarPag] = useState('start');

  return (
    <div className="templates">
      
      <div className="template">
        {trocarPag === 'start' && <Start />}
        {trocarPag === 'aboutme' && <Aboutme />}
        {trocarPag === 'techs' && <Techs />}
        {trocarPag === 'contact' && <Contact />}
        {trocarPag === 'works' && <Works />}
      </div>
      <div className="botoes">
        <button onClick={() => settrocarPag('start')}>Início</button>
        <button onClick={() => settrocarPag('aboutme')}>Sobre mim</button>
        <button onClick={() => settrocarPag('techs')}>Techs</button>
        <button onClick={() => settrocarPag('contact')}>Contato</button>
        <button onClick={() => settrocarPag('works')}>Trabalhos</button>


      </div>
    </div>
  );
}

export default Paginas;
