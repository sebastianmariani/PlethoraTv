import { useState, useEffect } from 'react';

import unknownImg from '../assets/unknownImg.png'


const Infopage = (props) => {
    const [data, setData] = useState(null);
    const data_type = props.match.params.data_type;
    const id = props.match.params.id;

    useEffect(() => { 
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${data_type}/${id}?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US`);
            const newData = await response.json();
            setData(newData);
            console.log(newData)
        }
        fetchData();
    },[id, data_type])
    if (data) {
        if (data_type === "person"){
            return (
                <div className="infopage">
                    <div>
                        <div>
                            {data.profile_path ? (
                                <img src={`http://image.tmdb.org/t/p/w200${data.profile_path}`} alt={`${data.name} portrait`}/>    
                            ) : (
                                <img  className="unknownImg" src={unknownImg} alt={`${data.name} portrait`}></img>
                            )} 
                        </div>
                        <div className="infolist">
                            <p><b>Name:</b> {data.name}</p>
                            {data.place_of_birth != null && (
                                <p><b>Place of birth:</b> {data.place_of_birth}</p>
                            )}
                            {data.birthday != null && (
                                <p><b>Born:</b> {data.birthday}</p>
                            )}
                            {data.deathday != null && (
                                <p><b>Died:</b> {data.deathday}</p>
                            )}
                        </div>
                    </div>
                    <div className="description">
                        <h3>{data.name}</h3>
                        <p>{data.biography}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="infopage">
                    <div>
                        <div>
                            {data.poster_path ? (
                                <img src={`http://image.tmdb.org/t/p/w200${data.poster_path}`} alt={`${data.title} poster`}/>    
                            ) : (
                                <img  className="unknownImg" src={unknownImg} alt={`${data.title || data.name} poster`}></img>
                            )}               
                        </div>
                        <div className="infolist">
                            <p><b>Rating:</b> {data.vote_average}</p>
                            <p><b>Release Year:</b> {data.release_date}</p>
                            <p><b>Genres:</b>
                            {data.genres.map((genre) => 
                                <span> {genre.name} </span>
                            )}</p>
                            <p><b>Countries:</b>  
                            {data.production_countries.map((country) => 
                                <span> {country.name}  </span>
                            )}</p>
                            <p><b>Status:</b> {data.status}</p>
                            <p><b>Dutation:</b> {data.runtime || data.episode_run_time[0]} min</p>
                            <button><i className="fas fa-star"></i> Add to favorites</button><br/>
                            <button><i className="fas fa-star"></i> Add to watch later</button><br/>
                            <button><i className="fas fa-bell"></i> Enable notifications</button><br/>
                        </div>
                    </div>
                    <div className="description">
                        <h3>{data.title || data.name}</h3>
                        <p>{data.overview}</p>
                    </div>
                </div>
            )
        }
        
    } else {
        return null
    }
}

export default Infopage