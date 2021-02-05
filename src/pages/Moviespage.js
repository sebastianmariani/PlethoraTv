import { useState } from 'react';

import FilterSearch from '../components/FilterSearch';

const Moviespage = () => {
    const [latestMovies, setLatestMovies] = useState()

    const fetchMovie = () => {
        fetch("https://api.themoviedb.org/3/movie/latest?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US")
        .then(res => res.json())
        .then(data => {
            if (!data.errors) {
                setLatestMovies(data.results);
            } else {
                setLatestMovies([])
            }
        })
    } 
    return (
        <div className="moviespage" onLoad={fetchMovie()}>
            <FilterSearch />
            {latestMovies.map((movie) => {
                return (
                    <div>
                        <img src={movie.poster_path} alt={`${movie.poster_path} poster`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Moviespage