import { Link } from 'react-router-dom';

import unknownImg from '../assets/unknownImg.png';

const ActorElement = (props) => {
    return (
        <Link onClick={props.toggleFocus} className="link" to={`/info/person/${props.result.id}`} key={props.result.id}>
            <div className="itemList">
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
        </Link>
    )
}

export default ActorElement