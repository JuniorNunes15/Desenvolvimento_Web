import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/animais">Animais</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}
