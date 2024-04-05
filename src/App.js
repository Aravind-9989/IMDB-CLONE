// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/header/Header';
// import Home from './Pages/home/home';
// import Movie from './Pages/movieList/movie';
// import MovieList from './components/movieList/movieList';

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Header />
      
//         <Routes>
//           <Route index element={<Home />}></Route>
//           <Route path='/movie/:id' element={<h1>{<Movie/>}</h1>}></Route>
//           <Route path='/movies/:type' element={<h1>{<MovieList/>}</h1>}></Route>
//           <Route path='/*' element={<h1>Error page</h1>}></Route>
          
//         </Routes>
       
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




// // import { useState } from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import './App.css';
// // import Header from './components/header/Header';
// // import Home from './Pages/home/home';
// // import Movie from './Pages/movieList/movie';
// // import MovieList from './components/movieList/movieList';

// // function App() {
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleSearch = (query) => {
// //     setSearchQuery(query);
// //   };

// //   return (
// //     <div className='App'>
// //       <BrowserRouter>
// //         <Header onSearch={handleSearch} />
      
// //         <Routes>
// //           <Route index element={<Home />} />
// //           <Route path='/movie/:id' element={<Movie />} />
// //           <Route path='/movies/:type' element={<MovieList searchQuery={searchQuery} />} />
// //           <Route path='/*' element={<h1>Error page</h1>} />
// //         </Routes>
       
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './Pages/home/home';
import Movie from './Pages/movieList/movie';
import MovieList from './components/movieList/movieList';
import LoginPage from './components/Signup/login'; // Import LoginPage component
import SignupPage from './components/Signup/signup'; // Import SignupPage component
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route index element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/movies/:type' element={<MovieList />} />
          <Route path='/login' element={<LoginPage />} /> {/* Add route for login page */}
          <Route path='/signup' element={<SignupPage />} /> {/* Add route for signup page */}
          <Route path='/*' element={<h1>Error page</h1>} />
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
