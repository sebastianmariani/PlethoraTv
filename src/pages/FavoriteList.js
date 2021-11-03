import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import unknownImg from "../assets/unknownImg.png";

const FavoriteList = () => {
  const { favorite, removeShowFromFavorite } = useContext(GlobalContext);
  return (
    <div className="list">
      {favorite.length > 0 ? (
        <div>
          <h2>Watch List</h2>
          {favorite.map((show) => (
            <div className="listElement">
              <h4>{show.title || show.name}</h4>
              <div className="showListItem">
                {show.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                    alt={`${show.title || show.name} poster`}
                  />
                ) : (
                  <img
                    src={unknownImg}
                    alt={`${show.title || show.name} poster`}
                  ></img>
                )}
                <div className="text">
                  <p>{show.overview}</p>
                </div>
                <button
                  className="remove"
                  onClick={() => removeShowFromFavorite(show.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="emptyList">Please add some show to the list...</p>
      )}
    </div>
  );
};

export default FavoriteList;
