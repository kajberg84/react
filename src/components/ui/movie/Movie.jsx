import "./Movie.css";

const Movie = (props) => {
  const { title, episode, director, release } = props;
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
    </div>
  );
};

export default Movie;
