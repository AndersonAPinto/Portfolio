import React, { useState } from "react";
import './pages.css'

const PageTech = () => {
   
    return (
        <div className="containerPages">
            <div className="text">
                <h1>Tecnologias</h1>
                <p>As tecnologias utilizadas para desenvolvimento desse Portfólio foram:
                    HTML, CSS, JavaScript e React.
                </p>
            
            <div className="iconstech">
                <div className="aligntextbtns">
                    <div className="tess"><i class="fa-brands fa-html5" style={{ color: '#003049' }}></i></div>
                    <div className="textbtn">&nbsp;HTML, usado para criar e estruturar páginas na web, definindo o conteúdo e a estrutura de documentos web.</div>
                    <div className="tess"><i class="fa-brands fa-css3-alt" style={{ color: '#003049' }}></i></div>
                    <div className="textbtn">&nbsp;CSS, usado para descrever a apresentação visual, incluindo layout, cores e fontes.</div>

                </div>
            </div>
            <div className="iconstech_">
                <div  className="aligntextbtns">
                    <div className="tess"><i class="fa-brands fa-square-js" style={{ color: '#003049' }}></i></div>
                    <div className="textbtn">&nbsp;JavaScript, linguagem de programação versátil e poderosa usada para adicionar lógicas e funcionalidades.</div>

                    <div className="tess"><i class="fa-brands fa-react" style={{  color: '#003049' }}></i></div>
                    <div className="textbtn">&nbsp;React, biblioteca JavaScript usado para construir interfaces de usuário, como Single Page Applications (SPA).</div>

                </div>
            </div>
            </div>
        </div>



    );
};

export default PageTech;