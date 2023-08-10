import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import axios from 'axios';
//api key cf8a901bd64d0c92392d8a717953b799
function MovieAPI() {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  function MovieInput() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cf8a901bd64d0c92392d8a717953b799&language=en-US&page=${currentPage}&query=${input}`
      )
      .then((data) => {
        setSearchData(data.data.results.filter((m) => m.poster_path != null));
      });
  }
  return (
    <div>
      <BurgerMenu />
      <header className="IPTracer">
        <input
          type="text"
          id="userIP"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={MovieInput}>Search</button>
        <div className="info">
          {searchData.map((m) => {
            return (
              <div key={m.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${m.poster_path}`}
                  alt="movie poster"
                />
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}
export default MovieAPI;
