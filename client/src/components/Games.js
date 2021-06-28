import React from "react";
import gamesImage from "../image/games.jpg";

const Games = (props) => {
  const { games } = props;
  return (
    <>
      {games.map((game, index) => (
        <div className="col-md-3 py-1">
          <div className="card" key={index}>
            <img
              src={gamesImage}
              className="card-img-top gamesImage"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-info">
                {game.title.substring(0, 20)}
              </h5>
              <h6 className="card-title">{game.platform}</h6>
              <h6 className="card-text">Score: {game.score}</h6>
              <h6 className="card-text">Genre: {game.genre}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Games;
