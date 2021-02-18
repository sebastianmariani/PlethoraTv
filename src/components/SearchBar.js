import { useState } from 'react';

import MovieElement from './MovieElement';
import TvElement from './TvElement';
import ActorElement from './ActorElement';
import UnfoundElement from './UnfoundElement';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const onSearchHandler = (e) => {
        const { REACT_APP_API_KEY } = process.env
        e.preventDefault();
        setSearchTerm(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
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
                    autoFocus
                    type="text" 
                    value={searchTerm}
                    onChange= { onSearchHandler }/>
                <span onClick={props.toggleFocus}>close</span>
            </div>
            {results.length > 0 ? (
            <div className="listResult">
                {results.map((result) => {
                    if( result.media_type === "movie") {
                        return <MovieElement toggleFocus={props.toggleFocus} result={result} key={result.id}/>
                    } else if ( result.media_type === "tv"){
                        return <TvElement toggleFocus={props.toggleFocus} result={result}  key={result.id}/>
                    } else if ( result.media_type === "person"){
                        return <ActorElement toggleFocus={props.toggleFocus} result={result} key={result.id}/>
                    } else {
                        return <span></span>
                    }
                })}
            </div>
            ) : (
            <div className="listResult"><UnfoundElement /></div>
            )}
        </div>
    )
}

export default SearchBar