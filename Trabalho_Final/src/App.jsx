import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Animais from './pages/Animais';
import DetalhesAnimal from './pages/DetalhesAnimal';
import Sobre from './pages/Sobre';
import Eventos from './pages/Eventos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/animal/:id" element={<DetalhesAnimal />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
