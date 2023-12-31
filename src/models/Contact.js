import React from "react";
import '../models/globaltext.css'

const Contact = () =>
    <div className="tx">
        <h1>Contato</h1>
        
        <form id="form">
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" required />
            </div>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem: </label>
                <textarea id="mensagem" name="mensagem" required></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>;

export default Contact;