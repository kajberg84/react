import "./Home.css";
import { useState, useEffect } from "react";
import { getAxios } from "../api/axiosCalls";
import Movie from "../ui/movie/Movie";

const Home = () => {
  const [isPressed, setIsPressed] = useState(true);
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sorted = movies.sort((a, b) => {
      let date1 = new Date(a.release_date).getTime();
      let date2 = new Date(b.release_date).getTime();
      return date1 - date2;
    });
    setSortedMovies(sorted);
  }, [movies]);

  const closeFetchButton = () => {
    setIsPressed(!isPressed);
    getMovies();
  };

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const response = await getAxios("https://swapi.dev/api/films");
      setMovies(response.results);
      setIsLoading(false);
    } catch (error) {
      console.log("home error", error);
    }
  };

  const renderMain = () => {
    if (isLoading) {
      return <h2 className='loading'>Loading...</h2>;
    } else {
      return (
        <>
          {sortedMovies.map((movie) => (
            <Movie
              key={movie.episode_id}
              title={movie.title}
              episode={movie.episode_id}
              director={movie.director}
              release={movie.release_date}
              characters={movie.characters}
            />
          ))}
        </>
      );
    }
  };

  return (
    <main className={`${isPressed ? "beforeFetch" : ""}`}>
      {isPressed && (
        <button className='button-wrapper' onClick={() => closeFetchButton()}>
          Fetch All Movies
        </button>
      )}
      {renderMain()}
    </main>
  );
};

export default Home;
