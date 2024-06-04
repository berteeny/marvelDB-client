import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      _id: 'ObjectId("66529cb5816f90f3004bd561")',
      title: "Iron Man",
      release: "2008",
      director: {
        name: "Jon Favreau",
        bio: "Jonathan Kolia Favreau is an American filmmaker and actor, well known for his directorial and acting credits in multple films within the Marvel Cinematic Universe.",
        birth: "1966-10-19",
        death: "-",
      },
      length: "2h 6m",
      genre: {
        name: "comedy",
        description:
          "Comedy is a film genre that emphasizes humor. These films are designed to amuse audiences and make them laugh. Films in this genre typically have a happy ending.",
      },
      description:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      imagePath: "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg",
    },
    {
      _id: 'ObjectId("66529e0a816f90f3004bd562")',
      title: "The Incredible Hulk",
      release: "2008",
      director: {
        name: "Louis Leterrier",
        bio: "Louis Leterrier is a French film and television director, best known for his work in action films such as 'Unleashed' and 'Clash of the Titans'.",
        birth: "1973-06-17",
        death: "-",
      },
      length: "1h 52m",
      genre: {
        name: "action",
        description:
          "The Action genre film is usually about a resourceful hero fighting against high odds. These movies often have life-threatening situations, a villain, or a chase which usually ends in victory for the hero.",
      },
      description:
        "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
      imagePath:
        "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg",
    },
    {
      _id: 'ObjectId("66529e7d816f90f3004bd563")',
      title: "Iron Man 2",
      release: "2010",
      director: {
        name: "Jon Favreau",
        bio: "Jonathan Kolia Favreau is an American filmmaker and actor, well known for his directorial and acting credits in multple films within the Marvel Cinematic Universe.",
        birth: "1966-10-19",
        death: "-",
      },
      length: "2h 4m",
      genre: {
        name: "comedy",
        description:
          "Comedy is a film genre that emphasizes humor. These films are designed to amuse audiences and make them laugh. Films in this genre typically have a happy ending.",
      },
      description:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      imagePath: "https://cdn.marvel.com/content/1x/ironman2_lob_crd_01_3.jpg",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
    <MovieView movie={selectedMovie} onCloseClick={() => setSelectedMovie(null)} />
    )
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
