import React from "react";
import '../header/header.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container">
            <div className="menu">
                <nav>
                    <Link to ="/">Início</Link>
                    <Link to ="/pageinfo">Sobre mim</Link>
                    <Link to ="/pagetech">Tecnologias</Link>
                    <Link to ="/pageworks">Trabalhos</Link>
                    <Link to ="/pagecontact">Contatos</Link>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;