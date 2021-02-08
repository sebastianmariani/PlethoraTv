import unknownImg from '../assets/unknownImg.png'

const TvElement = (props) => {
    return (
        <div className="itemList" key={props.result.id}>
            {props.result.poster_path ? (
                <img src={`http://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt={`${props.result.title} poster`}/>    
            ) : (
                <img src={unknownImg} alt={`${props.result.title} poster`}></img>
            )}
            <div className="info">
                <h5>{props.result.name}</h5>
                <h6>{props.result.media_type}-series</h6>
            </div>
        </div>
    )
}

export default TvElement