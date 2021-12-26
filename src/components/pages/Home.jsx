import "./Home.css";
import { useState, useEffect } from "react";
import { getAxios } from "../api/axiosCalls";
import Movie from "../ui/movie/Movie";

const Home = () => {
  const [isPressed, setIsPressed] = useState(true);
  const [movies, setMovies] = useState([]);

  // Sorting by release date
  useEffect(() => {
    movies.sort((a, b) => {
      let date1 = new Date(a.release_date).getTime();
      let date2 = new Date(b.release_date).getTime();
      return date1 - date2;
    });
  }, [movies]);

  const closeFetchButton = () => {
    setIsPressed(!isPressed);
    getMovies();
  };

  const getMovies = async () => {
    try {
      const response = await getAxios("/films");
      console.log(response.results);
      setMovies(response.results);
    } catch (error) {
      console.log("home error", error);
    }
  };

  let mainClass = "beforeFetch";
  if (!isPressed) {
    mainClass = "afterFetch";
  }

  return (
    <main className={mainClass}>
      {isPressed ? (
        <button className='button-wrapper' onClick={() => closeFetchButton()}>
          Fetch All Movies
        </button>
      ) : (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.episode_id}
              {...movie}
              title={movie.title}
              episode={movie.episode_id}
              director={movie.director}
              release={movie.release_date}
              characters={movie.characters}
            />
          );
        })
      )}
    </main>
  );
};

export default Home;
