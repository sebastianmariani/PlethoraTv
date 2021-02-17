import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import unknownImg from '../assets/unknownImg.png';

const WatchList = () => {
    const { watchlist, removeShowFromWatchlist } = useContext(GlobalContext);
    return (
        <div className="list">
            { watchlist.length > 0 ? (
                <div>
                    <h2>Watch List</h2>
                    {watchlist.map(show => (    
                        <div className="watchlistItem">
                            {show.poster_path ? (
                                <img src={`http://image.tmdb.org/t/p/w200${show.poster_path}`} alt={`${show.title || show.name} poster`}/>    
                            ) : (
                                <img src={unknownImg} alt={`${show.title || show.name } poster`}></img>
                            )}
                            <div className="text">
                                <h4>{show.title || show.name}</h4>
                                <p>{show.overview}</p>
                            </div>
                            <button className="remove" onClick={() => removeShowFromWatchlist(show.id)}>
                                <i className="fas fa-star"></i> Remove from watch list
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="emptyList">Please add some show to the list...</p>
            )}
        </div>
    )
}

export default WatchList