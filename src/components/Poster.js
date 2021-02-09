import unknownImg from '../assets/unknownImg.png'

const Poster = (props) => {
    const {title, poster_path, overview, vote_average, name} = props.data

    if (!title) {
        return (
            <div className="poster">
                {poster_path ? (
                    <img src={`http://image.tmdb.org/t/p/w200${poster_path}`} alt={`${name}poster`}></img>    
                ) : (
                    <img src={unknownImg} alt={`${name} poster`}></img>
                )}
                <div className="posterInfo">
                    <p>{name}</p>
                </div>
                <div className="poster-description">
                    <h3>{name}</h3>
                    <h5>Rating: {vote_average}</h5>
                    <p>{overview}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="poster">
                {poster_path ? (
                    <img src={`http://image.tmdb.org/t/p/w200${poster_path}`} alt={`${title}poster`}></img>    
                ) : (
                    <img src={unknownImg} alt={`${title} poster`}></img>
                )}
                <div className="posterInfo">
                    <p>{title}</p>
                </div>
                <div className="poster-description">
                    <h3>{title}</h3>
                    <h5>Rating: {vote_average}</h5>
                    <p>{overview}</p>
                </div>
            </div>
        )
    }
}

export default Poster