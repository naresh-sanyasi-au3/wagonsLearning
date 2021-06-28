import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Games from "./Games";

const Home = () => {
  const [games, setGames] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const loadGames = async () => {
    const result = await axios.get("http://localhost:3003/games");
    setGames(result.data);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newGames = games.filter((game) => {
        return Object.values(game)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newGames);
    } else {
      setSearchResults(games);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="container">
      <Navbar term={searchTerm} searchHandler={searchHandler} />
      <div className="py-5 mt-5">
      <h1> {searchTerm.length > 0 ? `${searchResults.length} item found` : ``}</h1>
        <div className="row">
          <Games games={searchTerm.length < 1 ? games : searchResults} />
        </div>
      </div>
    </div>
  );
};

export default Home;
