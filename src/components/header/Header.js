import React from "react";
import '../header/header.css';
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container">
            <div className="menu">
                <nav>
                    <Link to ="/">Início</Link>
                    <a href="#t">Teste</a>
                    <a href="#s">Sobre mim</a>
                    <a href="#c">Contatos</a>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;