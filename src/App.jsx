import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [estado, setEstado] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=aa2afbd5`;

  const getMovieRequest = async () => {
    const response = await fetch(apiUrl);
    const respJson = await response.json();

    console.log(respJson);
    if (respJson.Search) {
      setMovies(respJson.Search);
      setEstado(false);
    } else {
      setEstado(true);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchTerm]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    // console.log(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
  };

  return (
    <div className="">
      <div className="contenHead">
        <MovieHeading heading="Full Pelis" />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className={!estado?"movie-app":"justLoader"}>
        {!estado ? (
          <MovieList
            movies={movies}
            AddFavorites={AddFavorites}
            addFavoriteMovie={addFavoriteMovie}
          />
        ) : (
          <Loader/>
        )}
      </div>
      <hr />
      <div className="">
        <MovieHeading heading="Mis Favoritos" />
      </div>
      <div className="movie-app">
        <MovieList
          movies={favorites}
          AddFavorites={RemoveFavorites}
          addFavoriteMovie={removeFavoriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
