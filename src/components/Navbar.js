import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                            <Link to="/">Plethora</Link>
                        </li>
                        <li>
                            <NavLink to="/tvshows" activeClassName="active">TV Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" activeClassName="active">Movies</NavLink>
                        </li>
                    </ul>
                    {isActiveSearch ? (
                        <SearchBar toggleFocus={toggleFocus}/>
                    ): (
                        <ul className="navbar__links rightNav">
                            <li>
                                <NavLink to="/watch-list" activeClassName="active">Watch-list</NavLink>
                            </li>
                            <li> 
                                <NavLink to="/favorite-list" activeClassName="active">Favorite</NavLink>
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