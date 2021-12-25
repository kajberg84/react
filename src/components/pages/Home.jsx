import "./Home.css";
import { useState } from "react";
import { getAxios } from "../api/axiosCalls";

const Home = () => {
  const [isPressed, setIsPressed] = useState(true);

  const closeButton = () => {
    setIsPressed(!isPressed);
    getMovies();
  };

  const getMovies = async () => {
    try {
      const movies = await getAxios("/films");
      console.log(movies);
    } catch (error) {
      console.log("home error", error);
    }
  };

  return (
    <main>
      {isPressed && (
        <button className='button-wrapper' onClick={() => closeButton()}>
          Fetch All Movies
        </button>
      )}
    </main>
  );
};

export default Home;
