import MovieCard from '../components/MovieCard'
import { useState, useEffect} from 'react'

export default function MoviesHome(){

  const base_movies_api_url = 'http://localhost:3001/api/films';
  const [movies, setMovies] = useState([]);
  

  useEffect(()=>{

    //make a fetch request to the base api endpoint

    fetch(base_movies_api_url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data=> {
      console.log(data);
      setMovies(data);
      
      
    }).catch(err => console.log(err))

  }, [])




    return(
        <>  
        
            <section className='d-flex justify-content-around'>

                <div className='container'>
                    <h2 className='p-5'>Best Rating Movies</h2>
                    <div className='row row-cols-3 p-5 g-5'>

                    {
                        movies.map(movie =>(<div className='col'key={movie.id}><MovieCard movie={movie}/> </div>) )
                    }
                    </div>  
                </div>
                
                  
            </section>
        </>
    )
}