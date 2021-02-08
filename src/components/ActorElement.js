import unknownImg from '../assets/unknownImg.png'

const ActorElement = (props) => {
    return (
        <div className="itemList" key={props.result.id}>
            {props.result.profile_path ? (
                <img src={`http://image.tmdb.org/t/p/w200${props.result.profile_path}`} alt={`${props.result.title} poster`}/>    
            ) : (
                <img src={unknownImg} alt={`${props.result.title} poster`}></img>
            )}
            <div className="info">
                <h5>{props.result.name}</h5>
                <h6>{props.result.media_type}</h6>
            </div>
        </div>
    )
}

export default ActorElement