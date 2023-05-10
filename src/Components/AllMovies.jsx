import React from "react";
import Data from "../Database/Data.json";
import Profile from "../Components/Profile";

function AllMovies() {
  return (
    <div className="movie-list">
      {Data.results.map((data) => (
        <Profile key={data.episode_id} userData={data} />
      ))}
    </div>
  );
}

export default AllMovies;
