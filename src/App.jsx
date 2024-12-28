import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopSeries from  "./TopSeries";
import Recommendations from "./Recommandations";
import Contact from "./Contact";

function Home() {
  return (
    <main>
      <section>
        <h1>Bine ai venit pe WhatToWatch.ro!</h1>
        <p>Descoperă cele mai populare seriale și recomandări pentru tine.</p>
      </section>
      <section>
        <h2>Seriale recomandate</h2>
        <ul>
          <li>Breaking Bad</li>
          <li>Stranger Things</li>
          <li>Game of Thrones</li>
          
        </ul>
      </section>
    </main>
  );
}

function App() {
  return (

    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="/top-series">Top Seriale</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/recommendations">Recomandări</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-series" element={<TopSeries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <footer>
        <p>&copy; 2024 WhatToWatch.ro - Toate drepturile rezervate.</p>
      </footer>
    </Router>
  );
}

export default App;
