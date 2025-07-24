import { useEffect, useState } from 'react';
import { getEventos } from '../api';

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getEventos().then(setEventos);
  }, []);

  return (
    <section>
      <h2>Próximos Eventos</h2>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id}>
            <strong>{evento.nome}</strong> – {evento.data}
          </li>
        ))}
      </ul>
    </section>
  );
}
