import MovieCard from '../components/MovieCard'

export default function MoviesHome(){

    const movies = [
        {
          id: 1,
          name: "Inception",         
          text: "Un capolavoro di Christopher Nolan che esplora il mondo dei sogni."
          
        },
        {
          id: 2,
          name: "The Matrix",        
          text: "Un film rivoluzionario che combina azione e filosofia in una realtà simulata."
         
        },
        {
          id: 3,          
          name: "Interstellar",          
          text: "Un'avventura spaziale emozionante che esplora l'amore e la sopravvivenza."
          
        },
        {
          id: 4,
          name: "The Dark Knight",
          text: "Un'epica lotta tra Batman e Joker in una Gotham oscura e realistica.",
          
        },
        {
          id: 5,         
          name: "Pulp Fiction",
          text: "Un cult di Quentin Tarantino pieno di dialoghi brillanti e scene iconiche."       
        },
      ];
      

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