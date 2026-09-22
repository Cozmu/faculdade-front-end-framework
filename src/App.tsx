import { useState, type ReactElement } from 'react';
import './App.css';
import dataFilmes from './store/data';

function App(): ReactElement {
  const [filmes, setFilmes] = useState(dataFilmes);

  const adicionarVisualizacao = (id: number): void => {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id_filme === id
          ? {
              ...filme,
              contagem_visualizacoes: filme.contagem_visualizacoes + 1,
            }
          : filme,
      ),
    );
  };

  return (
    <main>
      <h1>Catálogo de Filmes</h1>

      <div className='cards'>
        {filmes.map((filme) => (
          <article className='card' key={filme.id_filme}>
            <h2>{filme.titulo}</h2>

            <p>
              <strong>Ano:</strong> {filme.ano_lancamento}
            </p>

            <p>
              <strong>Gênero:</strong> {filme.genero}
            </p>

            <button
              type='button'
              className='counter'
              onClick={() => adicionarVisualizacao(filme.id_filme)}
            >
              Visualizações: {filme.contagem_visualizacoes}
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}

export default App;
