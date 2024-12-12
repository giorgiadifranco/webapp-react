import MovieCard from '../components/MovieCard'
import { useState, useEffect} from 'react'

export default function MoviesHome(){




    return(
        <>  
        
            <section className='d-flex justify-content-around'>

                <div className='container'>
                    <h2 className='p-5'>Best Rating Movies</h2>
                    <div className='row row-cols-3 p-5 g-5'>
                     {/*
                        movies.map(movie =>(<div className='col'key={movie.id}><MovieCard movie={movie}/> </div>) )
                     */}
                    </div>  
                </div>
                
                  
            </section>
        </>
    )
}