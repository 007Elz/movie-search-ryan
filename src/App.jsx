import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");

  // Fetch movies from TMDB API
  const fetchMovies = async (searchTerm) => {
    try {
      const API_KEY = "YOUR_TMDB_API_KEY"; // 👈 Replace this with your key
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch default movies on load
  useEffect(() => {
    fetchMovies(query);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="container">
      <h1>🎥 MovieMania</h1>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                title: movie.title,
                year: movie.release_date?.split("-")[0],
                rating: movie.vote_average,
                description: movie.overview,
                poster: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image",
              }}
            />
          ))
        ) : (
          <p>No movies found 😢</p>
        )}
      </div>
    </div>
  );
}
