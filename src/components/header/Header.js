import React from "react";
import '../header/header.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container">
            <div className="menu">
                <nav>
                    <Link to ="/pageinfo">Sobre mim</Link>
                    <Link to ="/pagetech">Tecnologias</Link>
                    <Link to ="/pageworks">Trabalhos</Link>
                    <Link to ="/pagecontact">Contatos</Link>
                    <Link to ="/"><i class="fa-solid fa-house fa-2xl" style={{ fontSize: '21px', color:'white' }}></i></Link>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;