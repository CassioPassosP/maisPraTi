import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some((f) => f.id === movie.id);

  return (
    <div className="border p-2 rounded">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title} ({movie.release_date?.slice(0,4)})</h3>
      <Link to={`/details/${movie.id}`}>Ver Detalhes</Link>
      <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "Remover Favorito" : "Adicionar Favorito"}
      </button>
    </div>
  );
}