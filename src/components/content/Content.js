import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './content.css';


const Content = () => {

    

    return (
        <div className="containerContent">
            <div className="circle-container">

                <div className="icon">
                    <Link to="/pageinfo"><i class="fa-solid fa-circle-info fa-2xl" style={{ fontSize: '50px', color: '#FF2500' }}></i></Link>
                </div>
                <div className="icon">
                    <Link to="/pagetech"><i class="fa-solid fa-laptop-code fa-2xl" style={{ fontSize: '50px', color: '#FF2500' }} ></i></Link>
                </div>
                <div className="icon">
                    <Link to="/pageworks"><i class="fa-solid fa-briefcase fa-2xl" style={{ fontSize: '50px', color: '#FF2500' }}></i></Link>
                </div>
                <div className="icon">
                    <Link to="/pagecontact"><i class="fa-solid fa-headset fa-2xl" style={{ fontSize: '50px', color: '#FF2500' }}></i></Link>
                </div>

                
            </div>
           <div className="textcontent"><h6>Ola, sou Anderson Pinto...</h6></div>
            
            
            <div  id="circlesPage2"></div>
            <div id="circlesPage3"></div>
            <div id="circlesPage1"></div> 
            
        </div >

    );
};

export default Content;
