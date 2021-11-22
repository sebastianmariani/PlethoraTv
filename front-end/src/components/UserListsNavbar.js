import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserListsNavbar = (props) => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div>
            {isSignIn ? (
                <ul className="navbar__links rightNav">
                    <li>
                        <NavLink to="/watch-list" activeClassName="active">Watch-list</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/favorite-list" activeClassName="active">Favorite</NavLink>
                    </li>
                    <input id="searchbar" type="text" placeholder="Search..." onFocus={props.toggleFocus}/>
                </ul>
            ) : (
                <ul className="navbar__links rightNav">
                    <button>Sign-in</button>
                    <input id="searchbar" type="text" placeholder="Search..." onFocus={props.toggleFocus}/>
                </ul>
             )}
        </div>
    )
}

export default UserListsNavbar;