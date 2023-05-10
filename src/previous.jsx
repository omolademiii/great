import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { userData } = props;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="movie-info"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: 0.5,
        boxShadow: hovered ? "5px 5px 5px #aaaaaa" : "1px 1px 1px ",
      }}
    >
      <h1 className="piece"> {userData.title} </h1>
      <h2> {userData.release_date} </h2>
      <p className="before"> {userData.opening_crawl} </p>
      <div className="bord"></div>
      <Link className="link" to={`movie/${userData.episode_id}`}>
        More Link
      </Link>
    </div>
  );
};

export default Profile;