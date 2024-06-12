import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://movie-api-v2dh.onrender.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie.key,
            title: movie.title,
            release: movie.release,
            length: movie.length,
            description: movie.description,
            director: {
              name: movie.director.name,
              bio: movie.director.bio,
              birth: movie.director.birth,
              death: movie.director.death,
            },
            genre: {
              name: movie.genre.name,
              description: movie.genre.description,
            },
            image: movie.imagePath,
          };
        });
        console.log("movies from api: ", data);
        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onCloseClick={() => setSelectedMovie(null)}
      />
    );
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
