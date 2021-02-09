import { useState, useEffect } from 'react';

import Poster from '../components/Poster'

import FilterSearch from '../components/FilterSearch';

const Moviespage = () => {
    const [latestMovies, setLatestMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US")
        .then(res => res.json())
        .then(data => {
            setLatestMovies(data.results)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <FilterSearch />
            <div className="posterPage">
                {latestMovies.length > 0 && latestMovies.map((movie) =>
                <Poster data={movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Moviespage