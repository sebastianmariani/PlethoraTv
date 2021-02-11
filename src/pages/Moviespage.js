import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Poster from '../components/Poster'

import FilterSearch from '../components/FilterSearch';

const Moviespage = () => {
    const [latestMovies, setLatestMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setLatestMovies((prev) => prev.concat(data.results))
        })
        .catch((err) => 
        console.log(err))
    }, [page])

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY * 1.1) >= document.body.offsetHeight) {
            setPage(page + 1)
        }
    };
    return (
        <div>
            <FilterSearch />
            <div className="posterPage">
                {latestMovies.length > 0 && latestMovies.map((movie) =>
                    <Link className="link" to={`/info/movie/${movie.id}`} key={movie.id}>
                        <Poster data={movie}/>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Moviespage