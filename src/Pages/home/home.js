// import React, { useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { Link, useNavigate } from "react-router-dom";
// import MovieList from "../../components/movieList/movieList";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "../../firebase/firebase";

// function Home() {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const nav = useNavigate();
//   const [user, setUser] = useState("");
//   const auth = getAuth(app);

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.results);
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching popular movies:", error);
//       });
//   }, []);

//   useEffect(() => {
//     onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser(u);
//       }
//     });
//   }, [auth]);

//   const log = () => {
//     nav("/login");
//   };

//   const sig = () => {
//     nav("/signup");
//   };

//   const logo = () => {
//     signOut(auth).then(() => {
//       console.log("Successfully signed out");
//       nav("/login");
//     });
//   };

//   return (
//     <div className="poster">
//       {user ? (
//         <button className="Btn" onClick={logo}>
//           Logout
//         </button>
//       ) : (
//         <>
//           <div
//             style={{
//               position: "absolute",
//               top: "10px",
//               right: "60px",
//               display: "flex",
//               alignItems: "center",
//               textAlign: "center",
//             }}
//           >
//             {/* <button
//               className="Btn"
//               onClick={log}
//               style={{
//                 height: "40px",
//                 marginRight: "10px",
//                 width: "45px",
//                 borderRadius: "15px",
//               }}
//             >
//               Login
//             </button>
//             <button
//               className="Btnn"
//               onClick={sig}
//               style={{
//                 height: "40px",
//                 marginRight: "10px",
//                 borderRadius: "15px",
//                 width: "50px",
//               }}
//             >
//               SignUp
//             </button> */}
//           </div>
//         </>
//       )}

//       <Carousel
//         showThumbs={false}
//         autoPlay={true}
//         transitionTime={3}
//         infiniteLoop={true}
//         showStatus={false}
//       >
//         {popularMovies.map((movie) => (
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             to={`/movie/${movie.id}`}
//             key={movie.id}
//           >
//             <div className="posterImage">
//               <img
//                 src={`https://image.tmdb.org/t/p/original${
//                   movie && movie.backdrop_path
//                 }`}
//                 alt={movie.title}
//               />
//             </div>
//             <div style={{ marginTop: "-520px", position: "absolute" }}>
//               <div
//                 className="posterImage__overlay"
//                 style={{ padding: "20px", backgroundColor: "transparent" }}
//               >
//                 <div style={{ marginBottom: "10px" }}>
//                   <div
//                     className="posterImage__title"
//                     style={{
//                       fontSize: "45px",
//                       color: "white",
//                       textAlign: "left",
//                     }}
//                   >
//                     {movie ? movie.original_title : ""}
//                   </div>
//                   <div
//                     className="posterImage__runtime"
//                     style={{
//                       fontSize: "30px",
//                       color: "white",
//                       textAlign: "left",
//                     }}
//                   >
//                     {movie ? movie.release_date : ""}
//                     <span
//                       className="posterImage__rating"
//                       style={{ marginLeft: "20px", fontSize: "30px" }}
//                     >
//                       {movie ? movie.vote_average : ""}
//                       <i
//                         className="fas fa-star"
//                         style={{ color: "#e6b706", marginLeft: "10px" }}
//                       />
//                     </span>
//                   </div>
//                 </div>
//                 <div
//                   className="posterImage__description"
//                   style={{
//                     fontSize: "25px",
//                     color: "white",
//                     textAlign: "left",
//                   }}
//                 >
//                   {movie ? movie.overview : ""}
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </Carousel>
//       <MovieList />
//     </div>
//   );
// }

// export default Home;

// hi this is updated page

import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useNavigate } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";
import "./home.css"; 

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=MAN&api_key=4e44d9029b1270a757cddc766a1bcb63"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      }
    });
  }, [auth]);

  const log = () => {
    nav("/login");
  };

  const sig = () => {
    nav("/signup");
  };

  const logo = () => {
    signOut(auth).then(() => {
      console.log("Successfully signed out");
      nav("/login");
    });
  };

  return (
    <div className="poster">
      {user ? (
        <button className="Btn" onClick={logo}>
          Logout
        </button>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "60px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Login and Signup buttons */}
        </div>
      )}

      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
            key={movie.id}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie.original_title}
              </div>
              <div className="posterImage__runtime">
                {movie.release_date}
                <span className="posterImage__rating">
                  {movie.vote_average}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="posterImage__description">
                {movie.overview}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
}

export default Home;



















// import React, { useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { Link, useNavigate } from "react-router-dom";
// import MovieList from "../../components/movieList/movieList";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "../../firebase/firebase";
// import "./home.css"; 

// function Home() {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const nav = useNavigate();
//   const [user, setUser] = useState("");
//   const auth = getAuth(app);

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/search/movie?query=MAN&api_key=4e44d9029b1270a757cddc766a1bcb63"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.results);
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching popular movies:", error);
//       });
//   }, []);

//   useEffect(() => {
//     onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser(u);
//       }
//     });
//   }, [auth]);

//   useEffect(() => {
//     if (searchQuery.length > 2) {
//       fetch(
//         `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=4e44d9029b1270a757cddc766a1bcb63`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           setSearchResults(data.results);
//         })
//         .catch((error) => {
//           console.error("Error fetching search results:", error);
//         });
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   const log = () => {
//     nav("/login");
//   };

//   const sig = () => {
//     nav("/signup");
//   };

//   const logo = () => {
//     signOut(auth).then(() => {
//       console.log("Successfully signed out");
//       nav("/login");
//     });
//   };

//   return (
//     <div className="poster">
//       {user ? (
//         <button className="Btn" onClick={logo}>
//           Logout
//         </button>
//       ) : (
//         <div
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "60px",
//             display: "flex",
//             alignItems: "center",
//             textAlign: "center",
//           }}
//         >
//           {/* Login and Signup buttons */}
//         </div>
//       )}

//       <input
//         type="text"
//         placeholder="Search for movies..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="searchInput"
//       />
//       {searchResults.length > 0 && (
//         <div className="searchResults">
//           {searchResults.map((movie) => (
//             <Link
//               style={{ textDecoration: "none", color: "white" }}
//               to={`/movie/${movie.id}`}
//               key={movie.id}
//             >
//               <div className="searchResultItem">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <div>{movie.title}</div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       <Carousel
//         showThumbs={false}
//         autoPlay={true}
//         transitionTime={3}
//         infiniteLoop={true}
//         showStatus={false}
//       >
//         {popularMovies.map((movie) => (
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             to={`/movie/${movie.id}`}
//             key={movie.id}
//           >
//             <div className="posterImage">
//               <img
//                 src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//                 alt={movie.title}
//               />
//             </div>
//             <div className="posterImage__overlay">
//               <div className="posterImage__title">
//                 {movie.original_title}
//               </div>
//               <div className="posterImage__runtime">
//                 {movie.release_date}
//                 <span className="posterImage__rating">
//                   {movie.vote_average}
//                   <i className="fas fa-star" />
//                 </span>
//               </div>
//               <div className="posterImage__description">
//                 {movie.overview}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </Carousel>
//       <MovieList />
//     </div>
//   );
// }

// export default Home;
