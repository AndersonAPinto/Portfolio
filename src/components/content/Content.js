import React from "react";
import { Link } from 'react-router-dom';
import './content.css';


const Content = () => {

    return (
        <div className="containerContent">
            <div className="circle-container">
                <div className="icon">
                    <Link to="/pageinfo"><i class="fa-solid fa-circle-info fa-2xl" style={{ fontSize: '50px', color:'##f7a83a' }}></i></Link>
                </div>
            <div className="icon">
                <Link to="/pagetech"><i class="fa-solid fa-laptop-code fa-2xl" style={{ fontSize: '50px' , color: '#1d0af7' }} ></i></Link>
            </div>
            <div className="icon">
                <Link to="/pageworks"><i class="fa-solid fa-briefcase fa-2xl" style={{ fontSize: '50px', color:'#457a38' }}></i></Link>
            </div>
            <div className="icon">
                <Link to="/pagecontact"><i class="fa-brands fa-whatsapp fa-2xl" style={{ fontSize: '50px', color:'#048002' }}></i></Link>
                </div>
            <div className="icon">
                <Link to="/"><i class="fa-solid fa-house fa-2xl" style={{ fontSize: '50px', color:'#7a1879' }}></i></Link>
                </div>
        </div>
        </div >
    );
};

export default Content;
