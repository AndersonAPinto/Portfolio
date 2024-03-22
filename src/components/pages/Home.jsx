import React from "react";
import './home.css';
import './homeMobile.css';
import NavBar from "../Layout/NavBar";

function Home() {
    return (
       <div>
            <div className="container_video">
                <video className="video" autoPlay muted loop playsInline>
                    <source src="/Video.mp4" type="video/mp4" />
                </video>
            </div>
            <NavBar />
        </div>
    )
}

export default Home