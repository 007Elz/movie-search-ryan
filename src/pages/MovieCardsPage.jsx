import React from "react";
import { moviesData } from "../data/moviesData";
import MovieCard from "../components/movieCard";
import "../styles.css";


export default function MovieCardsPage() {
return (
<div className="movies-page">
<h1 className="movies-title">Featured Movies</h1>


<div className="movies-grid">
{moviesData.results.map((movie) => (
<MovieCard key={movie.id} movie={movie} />
))}
</div>
</div>
);
}