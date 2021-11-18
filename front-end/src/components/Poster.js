import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

import unknownImg from "../assets/unknownImg.png";

const Poster = (props) => {
  const { data } = props;
  const {
    addShowToWatchlist,
    removeShowFromWatchlist,
    addShowToFavorite,
    removeShowFromFavorite,
    watchlist,
    favorite,
  } = useContext(GlobalContext);

  if (!data.title) {
    return (
      <div className="poster">
        {data.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
            alt={`${data.name}poster`}
          ></img>
        ) : (
          <img src={unknownImg} alt={`${data.name} poster`}></img>
        )}
        <div className="posterInfo">
          <p>{data.name}</p>
        </div>
        <div
          className="poster-description"
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://image.tmdb.org/t/p/w200${data.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link className="link" to={`/info/tv/${data.id}`} key={data.id}>
            <div className="info">
              <h3>{data.name}</h3>
              <h5>Rating: {data.vote_average}</h5>
              <p>{data.overview}</p>
            </div>
          </Link>
          <div className="addToList">
            <h4>Add to :</h4>
            <div className="dropdown">
              {favorite.find((i) => i.id === data.id) ? (
                <label>
                  <input
                    checked
                    type="checkbox"
                    className="remove"
                    onClick={() => removeShowFromFavorite(data.id)}
                  />
                  Favorite
                </label>
              ) : (
                <label>
                  <input
                    type="checkbox"
                    className="add"
                    onClick={() => addShowToFavorite(data)}
                  />
                  Favorite
                </label>
              )}
              {watchlist.find((i) => i.id === data.id) ? (
                <label>
                  <input
                    checked
                    type="checkbox"
                    className="remove"
                    onClick={() => removeShowFromWatchlist(data.id)}
                  />
                  Watch-list
                </label>
              ) : (
                <label>
                  <input
                    type="checkbox"
                    className="add"
                    onClick={() => addShowToWatchlist(data)}
                  />
                  Watch-list
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="poster">
        {data.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
            alt={`${data.title}poster`}
          ></img>
        ) : (
          <img src={unknownImg} alt={`${data.title} poster`}></img>
        )}
        <div className="posterInfo">
          <p>{data.title}</p>
        </div>
        <div
          className="poster-description"
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://image.tmdb.org/t/p/w200${data.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link className="link" to={`/info/movie/${data.id}`} key={data.id}>
            <div className="info">
              <h3>{data.title}</h3>
              <h5>Rating: {data.vote_average}</h5>
              <p>{data.overview}</p>
            </div>
          </Link>
          <div className="addToList">
            <h4>Add to :</h4>
            <div className="dropdown">
              {favorite.find((i) => i.id === data.id) ? (
                <label>
                  <input
                    checked
                    type="checkbox"
                    onClick={() => removeShowFromFavorite(data.id)}
                  />
                  Favorite
                </label>
              ) : (
                <label>
                  <input
                    type="checkbox"
                    onClick={() => addShowToFavorite(data)}
                  />
                  Favorite
                </label>
              )}
              {watchlist.find((i) => i.id === data.id) ? (
                <label>
                  <input
                    checked
                    type="checkbox"
                    onClick={() => removeShowFromWatchlist(data.id)}
                  />
                  Watch-list
                </label>
              ) : (
                <label>
                  <input
                    type="checkbox"
                    onClick={() => addShowToWatchlist(data)}
                  />
                  Watch-list
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Poster;
