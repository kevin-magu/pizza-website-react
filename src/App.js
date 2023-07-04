import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
      <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/menu" element={<Menu />} />
      </Routes>
     </Router>
     <Footer />
    </div>
  );
}

export default App;
