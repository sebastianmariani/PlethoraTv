const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="search">
                <input type="text"/>
                <a href="/">close</a>
            </div>
            <div className="listResult">
                <div className="itemList">
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png" alt="cover"/>
                    <h5>Grand Budapest Hotel</h5>
                    <h6>Movie, 2009</h6>
                </div>
            </div>
        </div>
    )
}

export default SearchBar