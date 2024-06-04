export const MovieView = ({movie, onCloseClick}) => {
  return (
    <div>
      <div>
        <img src={movie.imagePath} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Release: </span>
        <span>{movie.release}</span>
      </div>
      {/* <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div> */}
      <div>
        <span>Length: </span>
        <span>{movie.length}</span>
      </div>
      {/* <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div> */}
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <button onClick={onCloseClick}>Close</button>
    </div>
  );
};
