import React, {useState} from "react";
import Start from "./models/Start";
import Aboutme from "./models/Aboutme";

function Paginas() {
  const [trocarPag, settrocarPag] = useState('start');

  return (
    <div >
     <Start />
     {trocarPag === 'start' && <Start />}
     {trocarPag === 'aboutme' && <Aboutme />}

     <button onClick={() => settrocarPag('start')}>Início</button>
     <button onClick={() => settrocarPag('aboutme')}>Sobre mim</button>

    </div>
  );
}

export default Paginas;
