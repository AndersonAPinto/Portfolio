// FooterWithLogic.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const DelHeader = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Header/>}
        </>
    );
}

export default DelHeader;
