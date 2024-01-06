import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import effectBackgroundColor from "./components/pages/ItinerantBg";
import { BrowserRouter as Router, Route, Routes, useLocation, useLoaderData } from 'react-router-dom';
import PageInfo from "./components/pages/PageInfo";
import PageTech from "./components/pages/Tech";
import PageWorks from "./components/pages/Works";
import PageContact from "./components/pages/Contact";
import DelFooter from "./components/footer/DelFooter";
import DelHeader from "./components/header/DelHeader"; 




function App() {
  return (

    <div>
      <Router>
        <DelHeader/>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/pageinfo" element={<PageInfo />} />
          <Route path="/pagetech" element={<PageTech />} />
          <Route path="/pageworks" element={<PageWorks />} />
          <Route path="/pagecontact" element={<PageContact />} />
        </Routes>
        <DelFooter/>
      </Router>

    </div>
  );
}

export default App;
