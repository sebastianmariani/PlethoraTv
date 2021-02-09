import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Poster from '../components/Poster'

import FilterSearch from '../components/FilterSearch';

const Tvshowspage = () => {
    const [latestTvshows, setLatestTvshows] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setLatestTvshows(data.results)
        })
    })
    //FIX INFINITE LOOP
    const fetchData = () => {
        setPage( page + 1 )
        // fetch(`https://api.themoviedb.org/3/tv/popular?api_key=bafd2ca046c30c5e5ef91a74e308e5b7&language=en-US&page=${page}`)
        // .then(res => res.json())
        // .then(data => {
        //     setLatestTvshows(latestTvshows.concat(data.results))
        // })
    }
    return (
        <div>
            <FilterSearch />
            <InfiniteScroll 
                dataLength={latestTvshows.length} 
                loadMore={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                <div className="posterPage">
                    {latestTvshows.length > 0 && latestTvshows.map((tvShow) =>
                    <Poster data={tvShow} key={tvShow.id}/>
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Tvshowspage