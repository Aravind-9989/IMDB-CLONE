import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const nav = useNavigate();
console.log(nav)
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredMovies = popularMovies.filter((movie) =>
      movie.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredMovies.length > 0) {
      nav(`/movie/${filteredMovies[0].id}`);
    } else {
      console.log("No movie found");
    }

    setSearchQuery("");
    setSuggestions([]);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredSuggestions = popularMovies.filter((movie) =>
        movie.title.toLowerCase().includes(lowerCaseQuery)
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limit suggestions to top 5
    } else {
      setSuggestions([]);
    }
    // alert("no movie found")
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here, such as clearing session/local storage
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              className="header__icon"
              src="data:image/png;base64,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"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/movies/popular" className="nav-link text-white">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/top_rated" className="nav-link text-white">
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/upcoming" className="nav-link text-white">
                  Upcoming
                </Link>
              </li>
            </ul>
            <form onSubmit={handleSearch} className="d-flex position-relative">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search movies..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
              {suggestions.length > 0 && (
                <ul
                  className="list-group position-absolute"
                  style={{ zIndex: 1000, top: "100%" }}
                >
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="list-group-item list-group-item-action"
                      onClick={() => {
                        nav(`/movie/${suggestion.id}`);
                        setSearchQuery("");
                        setSuggestions([]);
                      }}
                    >
                      {suggestion.title}
                    </li>
                  ))}
                </ul>
              )}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle ms-3"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i> {/* Profile symbol/icon */}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {!isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
