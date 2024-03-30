import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
// Assurez-vous d'importer vos composants ici
import Home from './components/Home';
// import News from './components/News';
// import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Assurez-vous de décommenter vos routes ici */}
          <Route path="/" element={<Home />} />
          <Route path="/language" element={<LanguageSelector />} />
          {/* <Route path="/news" element={<News />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
