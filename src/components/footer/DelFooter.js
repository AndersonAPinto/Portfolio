// FooterWithLogic.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const DelFooter = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default DelFooter;
