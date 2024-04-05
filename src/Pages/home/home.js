// import React, { useEffect, useState } from 'react';
// import './home.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { Link, useNavigate } from 'react-router-dom';
// import MovieList from '../../components/movieList/movieList';
// import Movie from '../movieList/movie';
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import { app } from '../../firebase/firebase';
// function Home() {
//   const [popularMovies, setPopularMovies] = useState([]);
// const nav=useNavigate();

// const [user,setuswer]=useState('');
// const auth=getAuth(app);

//   useEffect(() => {

//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.results);
//         setPopularMovies(data.results);
//       })
//       .catch((error) => {
//         console.error('Error fetching popular movies:', error);
//       });
//   }, []);

//   useEffect(()=>
//   {
//       onAuthStateChanged(auth,(u)=>
//     {
//       if(u)
//       {
//         setuswer(u);
//       }

//     })

//   },[auth])

//   const log=()=>
//   {
//     nav('/login');
//   }
//   const sig=()=>
//   {
//     nav('/signup')

//   }
//   const logo=()=>
//   {
//     signOut(auth).then(()=>
//     {
//       console.log("buikdhxdweio")
//       nav('/login');

//     })

//   }

//   return (
//     <div className='poster' style={{marginBottom:"50px"}}>
//       {

//         user
//         ?
//         <><button className='Btn' onClick={logo}>Logout</button></>
//         :
//         <>
//         <button className='Btn' onClick={log}>Login</button>
//         <button className='Btnn' onClick={sig}>SignUp</button>
//         </>

//       }

//       <Carousel
//         showThumbs={false}
//         autoPlay={true}
//         transitionTime={3}
//         infiniteLoop={true}
//         showStatus={false}
//       >
//         {popularMovies.map(movie => (
//           <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
//             <div className='posterImage'>
//               <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.title} />
//             </div>
//             <div className='posterImage__overlay'>
//               <div className='posterImage__title'>{movie ? movie.original_title : ''}</div>
//               <div className='posterImage__runtime'>
//                 {movie ? movie.release_date : ""}
//                 <span className="posterImage__rating">
//                   {movie ? movie.vote_average : ""}
//                   <i className='fas fa-star' />{" "}
//                 </span>
//               </div>
//               <div className='posterImage__description'>{movie ? movie.overview:""}</div>
//             </div>
//           </Link>
//         ))}
//       </Carousel>
//      <MovieList/>
//     </div>
//   );
// }

// export default Home;

























import React, { useEffect, useState } from "react";
import styles from "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useNavigate } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Movie from "../movieList/movie";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
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
        <button className="Btn" onClick={logo} >
          Logout
        </button>
      ) : (
        <>
        <div style={{position:"relative",top:"0px",float:"right" ,marginTop:"0px",top:"-40px", right:"45px", borderRadius:"25px"}}>
          <button className="Btn" onClick={log} style={{height:"45px",gap:"25px"}}>  
            Login
          </button>&nbsp;&nbsp;&nbsp;
          <button className="Btnn" onClick={sig} style={{height:"45px"}}>
            SignUp
          </button>
          </div>
        </>
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
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage__runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="posterImage__description">
                {movie ? movie.overview : ""}
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
