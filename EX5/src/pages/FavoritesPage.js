import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum filme favorito ainda.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;