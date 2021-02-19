import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [isActiveSearch, setIsActiveSearch] = useState(false)

    const toggleFocus = () => {
        setIsActiveSearch(!isActiveSearch)
    }

    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <ul className="navbar__links leftNav">
                        <li>
                            {/* <Link to="/">Plethora</Link> */}
                            Plethora
                        </li>
                        <li>
                            <Link to="/tvshows">TV Shows</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                    {isActiveSearch ? (
                        <SearchBar toggleFocus={toggleFocus}/>
                    ): (
                        <ul className="navbar__links rightNav">
                            <li>
                                <Link to="/watch-list">watch-list</Link>
                            </li>
                            <li>
                                <Link to="/favorite-list">favorite</Link>
                            </li>
                            <li>
                                <input type="text" placeholder="Search..." onFocus={toggleFocus}/>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar