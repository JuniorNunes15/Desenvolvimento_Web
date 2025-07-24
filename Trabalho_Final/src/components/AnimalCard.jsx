import { Link } from 'react-router-dom';

export default function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <img src={animal.foto} alt={animal.nome} />
      <h3>{animal.nome}</h3>
      <p>{animal.especie}</p>
      <Link to={`/animal/${animal.id}`}>Ver mais</Link>
    </div>
  );
}
