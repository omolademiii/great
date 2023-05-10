import react from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllMovies from "./Components/AllMovies";

const App = () => {
  return (
    <div className="main">
      <Header />

      <div className="middleData">
        <Router>
          <Routes>
            <Route path="/" element={<AllMovies />} />
            <Route path="movie/:movieId" element={<MovieDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
