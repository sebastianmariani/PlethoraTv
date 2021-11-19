import { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserListsNavbar from './UserListsNavbar';

const Navbar = () => {
    const [isActiveSearch, setIsActiveSearch] = useState(false);

    const toggleFocus = () => {
        setIsActiveSearch(!isActiveSearch)
    } 

    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <ul className="navbar__links leftNav">
                        <li>
                            <Link to="/">
                                Plethora
                            </Link>
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
                        <UserListsNavbar />
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar