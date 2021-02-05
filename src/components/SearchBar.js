import { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const onSearchHandler = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => {
            if (!data.errors) {
                setResults(data.results);
            } else {
                setResults([])
            }
        })
    }
    return (
        <div className="searchbar">
            <div className="search">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange= { onSearchHandler }/>
                <a href="/">close</a>
            </div>
            {results.length > 0 && (
            <div className="listResult">
                {results.map((result) => (
                    <div className="itemList" key={result.id}>
                        {result.poster_path ? (
                            <img src={`http://image.tmdb.org/t/p/w200${result.poster_path}`} alt={`${result.title} poster`}/>    
                        ) : (
                            <img className="filler-poster" alt={`${result.title} poster`}/>
                        )}
                        <div className="info">
                            <h5>{result.title}</h5>
                            <h6>{result.media_type}</h6>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default SearchBar