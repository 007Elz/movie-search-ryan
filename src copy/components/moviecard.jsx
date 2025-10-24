// src/components/MovieCard.jsx
export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} />
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <p>⭐ {movie.rating}</p>
      <p className="desc">{movie.description}</p>
    </div>
  );
}
