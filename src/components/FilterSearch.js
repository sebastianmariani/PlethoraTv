const FilterSearch = () => {
    return (
        <div className="container">
            <div className="searchCriteria">
                <h3>Choose Tv show</h3>
                <hr></hr>
                <div>
                    <div className="searchfilter">
                        <p>Genres</p>
                        <input></input>
                    </div>
                    <div className="searchfilter">
                        <p>Country</p>
                        <input></input>
                    </div>
                    <div className="searchfilter">
                        <p>Year</p>
                        <input placeholder="From"></input>
                        <input placeholder="To"></input>
                    </div>
                </div>
            </div>
            <div className="filtersearch__nav">
                <p>Total</p>
                <p>Sort by</p>
            </div>
            <ul className="filtersearch__list">
                <li>500</li>
                <li><button>Choose tv show</button></li>
                <li>
                    <select>
                        <option>Popularity</option>
                        <option>Rating</option>
                        <option>Name</option>
                        <option>Year</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default FilterSearch