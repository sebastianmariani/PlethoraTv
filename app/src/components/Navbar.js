import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <ul className="navbar__links leftNav">
                        <li className="navbar__brand">
                            <Link to="/">Plethora</Link>
                        </li>
                        <li>
                            <Link to="/tvshows">TV Shows</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                    <ul className="navbar__links rightNav">
                        <li>
                            <i className="fas fa-bell"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <input type="text"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar