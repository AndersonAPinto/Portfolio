import Dropdown from './components/Layout/Dropdown.jsx';
import Experience from './components/pages/Experience.jsx';
import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Home from './components/pages/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return(
      <Router>
        <Dropdown />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    )
}

export default App;
