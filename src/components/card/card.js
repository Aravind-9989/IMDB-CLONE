// import { useState, useEffect } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { Link } from "react-router-dom";
// import "./card.css"
// const Cards = ({ movie }) => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1500);
//     }, []); // Adding an empty dependency array to run this effect only once

//     return (
//         <>
//             {isLoading ? (
//                 <div className="cards">
//                     <SkeletonTheme color="#202020" highlightColor="#444">
//                         <Skeleton height={300} direction={"2"} />
//                     </SkeletonTheme>
//                 </div>
//             )
//              :
//               (
//                 <Link to={`movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
//                     <div className="cards">
//                         <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt={movie ? movie.original_title : ""} />
//                         <div className="cards__overlay">
//                             <div className="cards__title">{movie ? movie.original_title : ""}</div>
//                             <div className="cards__runtime">
//                                 {movie ? movie.release_date : ""}
//                                 <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star"></i></span>
//                             </div>
//                             <div className="cards__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
//                         </div>
//                     </div>
//                 </Link>
//             )}
//         </>
//     );
// };

// export default Cards;
import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards