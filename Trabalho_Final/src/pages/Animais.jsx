import { useEffect, useState } from 'react';
import { getAnimais } from '../api';
import AnimalCard from '../components/AnimalCard';

export default function Animais() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    getAnimais().then(setAnimais);
  }, []);

  return (
    <section>
      <h2>Animais para Adoção</h2>
      <div className="grid">
        {animais.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}
