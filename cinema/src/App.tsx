import './App.css';
import { Header } from './Components/Header';
import {Routes, Route, Navigate, BrowserRouter, useParams} from "react-router-dom"
import { MovieList } from './Components/MovieList';
import { Favorites } from './Components/Favorites';
import { MovieDetails } from './Components/MovieDetails';
import MovieContextProvider from './context/MovieContextProvider';





function App() {
  // const [movieResponse, setMovieResponse] = useState<MovieResponse>();
  // const {id} = useParams()

  // useEffect(() => {
  //   GetMovieData().then(data => setMovieResponse(data))
  // }, []);

  // function findMovieDetails(id){
  //   if(id){
  //     const foundMovie = movieResponse?.results.find(movie => movie.id===id)
  //     return <MovieDetails movieDetails={foundMovie}/>
  //   }

  // }

  return (
    <div className = "App">
      <MovieContextProvider>
      <Header />
      <Routes>
        {/* <Route path="/" element={<MovieList movies={movieResponse}/>} /> */}
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        {/* <Route path="/details/:id" element={findMovieDetails(id)} /> */}
      </Routes>
      </MovieContextProvider>
      </div>

  );
}

export default App;
