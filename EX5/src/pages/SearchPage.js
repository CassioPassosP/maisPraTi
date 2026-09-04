import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchMovies = async (newPage = 1) => {
    if (!query.trim()) return; // evita busca vazia

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&language=pt-BR&page=${newPage}`
      );
      if (!res.ok) throw new Error("Erro ao buscar filmes");

      const data = await res.json();
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
      setPage(newPage);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Buscar Filmes</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={() => searchMovies(1)} // sempre reinicia na página 1
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>

      {loading && <p className="mt-4">Carregando...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Paginação */}
      {movies.length > 0 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => searchMovies(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            onClick={() => searchMovies(page + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
