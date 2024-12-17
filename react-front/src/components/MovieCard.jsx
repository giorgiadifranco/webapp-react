import {Link} from 'react-router-dom'
export default function MovieCard({movie}){

    return(

        <>
            <div className='card bg-dark text-white p-3'>
                
                <h3 className='title'><strong>{movie.title}</strong></h3>
                <p className='text'>{movie.director}</p>  
                    <p>#{movie.genre}</p>
                    
                    <p>{movie.abstract}</p>
                
                    <Link to={`/movie/${movie.id}`} className="btn btn-dark text-warning p-2" style={{ width: "110px" }}>Read more</Link>


            </div>
        
        </>

    )

}

