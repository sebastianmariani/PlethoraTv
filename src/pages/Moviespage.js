import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import Poster from '../components/Poster'

const Moviespage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setMovies((prev) => 
            prev.concat(data.results))
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
            <div className="posterPage">
                {movies.length > 0 && movies.map((movie) =>
                    <Link className="link" to={`/info/movie/${movie.id}`} key={movie.id}>
                        <Poster data={movie}/>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Moviespage