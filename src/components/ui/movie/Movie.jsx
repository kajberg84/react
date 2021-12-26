import "./Movie.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import { getAxios } from "../../api/axiosCalls";

const Movie = (props) => {
  const { title, episode, director, release, characters } = props;
  const [modalState, setModalState] = useState(false);
  const [allChars, setAllChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const modalHandle = async () => {
    setModalState(!modalState);
    await fetchAllChars();
  };

  const fetchAllChars = async () => {
    try {
      setIsLoading(true);
      let promises = await Promise.all(
        characters.map((char) => getAxios(char))
      );

      let sorted = promises.sort((a, b) => {
        let name1 = a.name.toLowerCase();
        let name2 = b.name.toLowerCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      });

      setAllChars((prevState) => [...prevState, ...sorted]);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className='movie-wrapper'>
      <div className='movie-header'>
        <p>{title}</p>
      </div>
      <ul className='movie-main'>
        <li> Episode: {episode}</li>
        <li className='mt10'>Director: {director}</li>
        <li className='mt10'>ReleaseDate: {release}</li>
      </ul>
      <button onClick={() => modalHandle()} className='movie-button'>
        Show more
      </button>

      {modalState && (
        <Modal closeModal={() => modalHandle()}>
          <h2 className='mt10'>{title}</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {allChars.map((char) => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Movie;
