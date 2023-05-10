import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Database/Data.json";
import axios from "axios";

function MovieDetails() {
  const { movieId } = useParams();
  let productNames = [];
  //   const [productNames, setProductNames] = useState([]);

  let i = 0;

  let singleMovie = Data.results.filter(function (e) {
    return e.episode_id == movieId;
  });

  const personName = (url) => {
    // const response = await fetch(url)
    //   .then((response) => response.json())
    //   .then((res) => res.name);
    const response = axios.get(url).then((res) => {
      productNames.push(res.data.name);
    });
    // console.log(response.name);
    // productNames.push(response.name);

    // productNames.push(response.name);
    // setProductNames((oldData) => [...setProductNames, response.name]);
  };

  //   singleMovie[0].characters.map((Character) => personName(Character));

  //   console.log(productNames);
  return (
    <div className="movieData">
      <div className="top">
        <Link className="link" to="/">
          <i className="fa fa-arrow-back"></i> Back to List
        </Link>
      </div>
      <div className="middleTop">
        <h1 className="title">{singleMovie[0].title}</h1>
        <h4 className="author">Director : {singleMovie[0].director}</h4>
        <h4 className="producer">Producer : {singleMovie[0].producer}</h4>
      </div>
      <div className="desc">
        <h3 className="descTitle">Description</h3>
        <p className="descFull">{singleMovie[0].opening_crawl}</p>
      </div>

      <div className="desc">
        <h3 className="descTitle">Characters</h3>
        <ul className="char"></ul>
      </div>

      <div className="desc">
        <h3 className="descTitle">Species</h3>
        <ul className="char">
          {singleMovie[0].species.map((specie) => (
            <li key={i++}>{specie}</li>
          ))}
        </ul>
      </div>

      <div className="desc">
        <h3 className="descTitle">Starships</h3>
        <ul className="char">
          {singleMovie[0].starships.map((Starship) => (
            <li key={i++}>{Starship}</li>
          ))}
        </ul>
      </div>

      <div className="desc">
        <h3 className="descTitle">Planets</h3>
        <ul className="char">
          {singleMovie[0].planets.map((planet) => (
            <li key={i++}>{planet}</li>
          ))}
        </ul>
      </div>

      <div className="desc">
        <h3 className="descTitle">Vechicles</h3>
        <ul className="char">
          {singleMovie[0].planets.map((planet) => (
            <li key={i++}>{planet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
