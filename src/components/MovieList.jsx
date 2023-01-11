import React from "react";

const MovieList = ({ movies, AddFavorites, addFavoriteMovie }) => {

  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container card" style={{ width: "15rem" }}>
          <div className="card-body">
            <h5 style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>
              {movie.Title}
            </h5>
            <img src={movie.Poster} alt="movie" />
            <p style={{ fontSize: "0.5rem", textTransform: "uppercase" }}>
              {movie.Type}
            </p>
            <div onClick={() => addFavoriteMovie(movie)} className="overlay">
              <AddFavorites />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
