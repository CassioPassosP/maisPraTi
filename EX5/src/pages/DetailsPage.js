import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/tmdb";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get(`/movie/${id}`, { params: { append_to_response: "credits" } })
      .then((res) => setMovie(res.data))
      .catch(() => setError("Erro ao carregar detalhes do filme"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Nenhum detalhe encontrado.</p>;

  return (
    <div className="p-4">
      <h1>{movie.title} ({movie.release_date?.slice(0,4)})</h1>
      <p><b>Diretor:</b> {movie.credits.crew.find(c => c.job === "Director")?.name}</p>
      <p><b>Elenco:</b> {movie.credits.cast.slice(0,5).map(c => c.name).join(", ")}</p>
      <p><b>Sinopse:</b> {movie.overview}</p>
      <p><b>Avaliação:</b> {movie.vote_average}</p>
    </div>
  );
}
