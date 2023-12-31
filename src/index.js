import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Paginas from './App';
import Pagestart from './Pagestart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Pagestart />
        <Paginas />
    </>
);
