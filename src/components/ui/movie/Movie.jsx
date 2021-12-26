import "./Movie.css";
import { useState } from "react";
import Modal from "../modal/Modal";

const Movie = (props) => {
  const { title, episode, director, release, characters } = props;
  const [modalState, setModalState] = useState(false);

  const modalHandle = () => {
    setModalState(!modalState);
  };

  //Function that fetches all characters from the API
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
      <button onClick={() => modalHandle(characters)} className='movie-button'>
        Show more
      </button>

      {modalState && (
        <Modal closeModal={() => modalHandle()}>
          <h2 className='mt10'>{title}</h2>
          <ul className='characters-list'>
            {characters.map((character) => {
              return <li key={character.id}>{character.name}</li>;
            })}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Movie;
