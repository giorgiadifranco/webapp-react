import MovieCard from '../components/MovieCard'

export default function MoviesHome(){

    const movies = [
        {
          id: 1,
          movie_id: 101,
          name: "Inception",
          vote: 4.0,
          text: "Un capolavoro di Christopher Nolan che esplora il mondo dei sogni.",
          created_at: "2023-12-11T10:00:00Z",
          updated_at: "2023-12-11T12:00:00Z",
        },
        {
          id: 2,
          movie_id: 102,
          name: "The Matrix",
          vote: 5.0,
          text: "Un film rivoluzionario che combina azione e filosofia in una realtà simulata.",
          created_at: "2023-12-10T15:30:00Z",
          updated_at: "2023-12-11T11:00:00Z",
        },
        {
          id: 3,
          movie_id: 103,
          name: "Interstellar",
          vote: 4.0,
          text: "Un'avventura spaziale emozionante che esplora l'amore e la sopravvivenza.",
          created_at: "2023-12-09T09:00:00Z",
          updated_at: "2023-12-10T16:45:00Z",
        },
        {
          id: 4,
          movie_id: 104,
          name: "The Dark Knight",
          vote: 5.0,
          text: "Un'epica lotta tra Batman e Joker in una Gotham oscura e realistica.",
          created_at: "2023-12-08T20:15:00Z",
          updated_at: "2023-12-09T18:30:00Z",
        },
        {
          id: 5,
          movie_id: 105,
          name: "Pulp Fiction",
          vote: 4.0,
          text: "Un cult di Quentin Tarantino pieno di dialoghi brillanti e scene iconiche.",
          created_at: "2023-12-07T14:00:00Z",
          updated_at: "2023-12-08T10:25:00Z",
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