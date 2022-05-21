import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import "../../components/row/Row.css";

function Row({ title, fetchUrl, isPosterLarge }) {
  const base_url = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"), url);
        })
        .catch((error) => console.log(error), console.log("Get movie error"));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters `}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isPosterLarge && "row__posterLarge"}`}
            src={`${base_url}${
              isPosterLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
