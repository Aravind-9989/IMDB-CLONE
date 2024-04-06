import React, { useEffect, useState } from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const nav=useNavigate();

    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {


//adfaef
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
          .then((res) => res.json())
          .then((data) => {
           //. console.log(data.results);
            setPopularMovies(data.results);
          })
          .catch((error) => {
            console.error('Error fetching popular movies:', error);
          });
      }, []);
//dwaf    



    const handleSearch = (event) => {
        event.preventDefault();



        var b=popularMovies.filter(v=>v.title==searchQuery);
    
    
        nav(`/movie/${b[0].id}`);

        event.preventDefault(); // Prevent default form submission behavior
        // Add your search functionality here
        console.log("Search query:", searchQuery);
        // Reset the search query after handling the search
        setSearchQuery('');
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="Logo" />
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search movies..." 
                        value={searchQuery} 
                        onChange={handleChange} 
                        // style={{padding:"10px"}}
                        style={{ padding: "10px", marginRight:"680px" }}
                    
                    />
                    <button type="submit" style={{padding:"10px",borderRadius:"15px",gap:"15px", width:"70px",position:"absolute",left:"52%",}}>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;

