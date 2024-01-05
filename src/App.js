import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import effectBackgroundColor from "./components/pages/ItinerantBg";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageInfo from "./components/pages/PageInfo";
import PageTech from "./components/pages/Tech";
import PageWorks from "./components/pages/Works";
import PageContact from "./components/pages/Contact";




function App() {
  return (

    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/pageinfo" element={<PageInfo />} />
            <Route path="/pagetech" element={<PageTech />} />
            <Route path="/pageworks" element={<PageWorks />} />
            <Route path="/pagecontact" element={<PageContact />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
