import React from "react";
import "../styles.css";


export default function MovieCard({ movie }) {
return (
<div className="movie-card">
<img src={movie.poster_path} alt={movie.title} className="movie-img" />


<div className="movie-details">
<h3 className="movie-title">{movie.title}</h3>
<p className="movie-year">{movie.release_date.slice(0, 4)}</p>
<p className="movie-overview">{movie.overview}</p>
<p className="movie-pop">🔥 {movie.popularity}</p>
</div>
</div>
);
}