import React, { useState, useEffect } from "react";

import Poster from "../components/Poster";

const Tvshowspage = () => {
  const [latestTvshows, setLatestTvshows] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatestTvshows((prev) => prev.concat(data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  window.onscroll = function () {
    if (
      window.innerHeight + window.scrollY * 1.1 >=
      document.body.offsetHeight
    ) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="posterPage">
        {latestTvshows.length > 0 &&
          latestTvshows.map((tvShow) => (
            <Poster data={tvShow} id={tvShow.id} />
          ))}
      </div>
    </div>
  );
};

export default Tvshowspage;
