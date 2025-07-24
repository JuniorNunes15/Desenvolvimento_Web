import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimalPorId } from '../api';

export default function DetalhesAnimal() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    getAnimalPorId(id).then(setAnimal);
  }, [id]);

  if (!animal) return <p>Carregando...</p>;

  return (
    <section>
      <h2>{animal.nome}</h2>
      <img src={animal.foto} alt={animal.nome} />
      <p><strong>Espécie:</strong> {animal.especie}</p>
      <p><strong>Idade:</strong> {animal.idade}</p>
      <p>{animal.descricao}</p>
    </section>
  );
}
