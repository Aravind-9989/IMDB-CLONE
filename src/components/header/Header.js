// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useNavigationType } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const nav = useNavigate();

//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     //adfaef
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         //. console.log(data.results);
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching popular movies:", error);
//       });
//   }, []);
//   //cjhdhc

//   const handleSearch = (event) => {
//     event.preventDefault();

//     var b = popularMovies.filter((v) => v.title == searchQuery);

//     nav(`/movie/${b[0].id}`);

//     event.preventDefault(); // Prevent default form submission behavior
//     // Add your search functionality here
//     console.log("Search query:", searchQuery);
//     // Reset the search query after handling the search
//     setSearchQuery("");
//   };

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className="header">
//       <div className="headerLeft">
//         <Link to="/">
//           <img
//             className="header__icon"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
//             alt="Logo"
//           />
//         </Link>
//         <Link to="/movies/popular" style={{ textDecoration: "none" }}>
//           <span>Popular</span>
//         </Link>
//         <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
//           <span>Top Rated</span>
//         </Link>
//         <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
//           <span>Upcoming</span>
//         </Link>
//       </div>
//       <div className="headerRight">
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search movies..."
//             value={searchQuery}
//             onChange={handleChange}
//             style={{ padding: "10px", marginRight: "680px", borderRadius:"10px" }}
//           />
//           <button
//             type="submit"
//             style={{
//               padding: "10px",
//               borderRadius: "55px",
//               gap: "15px",
//               width: "70px",
//               position: "absolute",
//               left: "52%",
//             }}
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Header;


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const nav = useNavigate();

//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error("Errior fetching popular movies:", error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const lowerCaseQuery = searchQuery.toLowerCase();
//     const filteredMovies = popularMovies.filter((movie) =>
//       movie.title.toLowerCase().includes(lowerCaseQuery)
//     );

//     if (filteredMovies.length > 0) {
//       nav(`/movie/${filteredMovies[0].id}`);
//     } else {
//       console.log("No movie found");
//     }

//     setSearchQuery("");
//   };

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className="header">
//       <div className="headerLeft">
//         <Link to="/">
//           <img
//             className="header__icon"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
//             alt="Logo"
//           />
//         </Link>
//         <Link to="/movies/popular" style={{ textDecoration: "none" }}>
//           <span>Popular</span>
//         </Link>
//         <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
//           <span>TopRated</span>
//         </Link>
//         <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
//           <span>Upcoming</span>
//         </Link>
//       </div>
//       <div className="headerRight">
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search movies..."
//             value={searchQuery}
//             onChange={handleChange}
//             style={{ padding: "10px", marginRight: "780px", borderRadius:"10px" }}
//           />
//           <button
//             type="submit"
//             style={{
//               padding: "10px",
//               borderRadius: "55px",
//               gap: "15px",
//               width: "70px",
//               position: "absolute",
//               left: "52%",
            
//             }}
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Header;
// ckbdwbdbwb





// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const nav = useNavigate();

//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching popular movies:", error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const lowerCaseQuery = searchQuery.toLowerCase();
//     const filteredMovies = popularMovies.filter((movie) =>
//       movie.title.toLowerCase().includes(lowerCaseQuery)
//     );

//     if (filteredMovies.length > 0) {
//       nav(`/movie/${filteredMovies[0].id}`);
//     } else {
//       console.log("No movie found");
//     }

//     setSearchQuery("");
//   };

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className="header">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <Link className="navbar-brand" to="/">
//             <img
//               className="header__icon"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
//               alt="Logo"
//             />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/movies/popular" className="nav-link">Popular</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/movies/top_rated" className="nav-link">Top Rated</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/movies/upcoming" className="nav-link">Upcoming</Link>
//               </li>
//             </ul>
//             <form onSubmit={handleSearch} className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search movies..."
//                 aria-label="Search"
//                 value={searchQuery} 
//                 onChange={handleChange}
//               />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//             <div>
//               <Link to="/signup" className="btn btn-primary ms-3">Sign Up</Link>
//               <Link to="/login" className="btn btn-secondary ms-3">Login</Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const nav = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

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
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              className="header__icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
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
                <Link to="/movies/popular" className="nav-link text-white">Popular</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/top_rated" className="nav-link text-white">Top Rated</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/upcoming" className="nav-link text-white">Upcoming</Link>
              </li>
            </ul>
            <form onSubmit={handleSearch} className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search movies..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div>
              <Link to="/signup" className="btn btn-primary ms-3">Sign Up</Link>
              <Link to="/login" className="btn btn-secondary ms-3">Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;


