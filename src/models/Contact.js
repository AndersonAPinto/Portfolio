import React from "react";


const Contact = () =>
    <div className="tx bg-contact">
        <h1 >Contato</h1>
        <div className="formContact">
            <form id="form">
                <div>
                    
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <div className="btns">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    </div>;

export default Contact;