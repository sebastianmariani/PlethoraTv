const FilterSearch = () => {
    return (
        <div className="container">
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