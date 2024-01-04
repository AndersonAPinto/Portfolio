import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/app.css';
import Paginas from './App';
import Pagestart from './Pagestart';
import Techs from './models/Techs';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Paginas />
    </>
);
