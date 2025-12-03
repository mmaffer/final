import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Entities from './pages/Entities';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* El padding ahora está en cada PÁGINA */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;