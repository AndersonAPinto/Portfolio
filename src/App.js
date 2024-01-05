import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import effectBackgroundColor from "./components/functonalities/ItinerantBg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
