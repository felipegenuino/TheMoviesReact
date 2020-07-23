import React, {useState, useEffect, Fragment} from 'react'; 
import api from './services/api';
 

import './App.css';
 
  
 
function App() { 
  const [movies, setMovies] = useState([]);
 
  useEffect( ()=>{
    api
    .get(`discover/movie?api_key=${process.env.REACT_APP_API_TMDB_KEY}&sort_by=popularity.desc&include_adult=false&language=pt-BR`)
    .then(response => {
      setMovies(response.data ) 
    });  
  }, [] )
  

  console.log('data =>', movies.results) 
  
  return (
    <Fragment> 
      <header>
        <h1>Movies    </h1>
 
        <input type="seach movie s"  />
      </header>
      <main> 
        <ul className="listMovies"> 
           { movies.results &&
            movies.results.map(
             movie => (
              <li key={movie.id}> 
                <div className="cardMovie" > 
                <img className="cardMoviePoster" src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                  <h3>{movie.title}</h3>
                    Popularidade <em>{movie.popularity}</em>
                  <p>{movie.overview}</p>
                </div>  
              </li> 
            ))
        }    
        </ul> 
      </main>   
      </Fragment>
  );
}

export default App;
