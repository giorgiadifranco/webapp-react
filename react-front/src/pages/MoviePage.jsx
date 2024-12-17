import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from '../components/ReviewCard.jsx'
import ReviewFormCard from "../components/ReviewFormCard.jsx"; '../components/ReviewFormCard.jsx'

export default function MoviePage(){

  const {id}  = useParams()
  const [movie, setMovie] = useState(null);
  
 

  const single_movie_api_url = `http://localhost:3001/api/films/${id}`;
  console.log(single_movie_api_url);
  


  useEffect(()=>{
    fetch(single_movie_api_url)
    .then(res=> res.json())
    .then(data =>{
      console.log(data);

      setMovie(data)

      
     
    })
    .catch(err => console.error('Error fetching film:', err));
  },[])

  


 /*
    const reviews = [
       {
          id: 1,
          name: "Alice",
          vote: 8,
          text: "Un film avvincente con una trama originale e ben costruita.",
          created_at: "2023-12-01T14:00:00Z",
          updated_at: "2023-12-02T16:30:00Z",
        },
        {
          id: 2,          
          name: "Bob",
          vote: 9,
          text: "Un capolavoro che mi ha tenuto incollato allo schermo dall'inizio alla fine!",
          created_at: "2023-12-03T10:20:00Z",
          updated_at: "2023-12-04T12:50:00Z",
        },
        {
          id: 3,
          name: "Charlie",
          vote: 7.5,
          text: "Bellissima cinematografia, ma la trama era un po' prevedibile.",
          created_at: "2023-12-05T18:15:00Z",
          updated_at: "2023-12-06T20:00:00Z",
        },
        {
          id: 4,
          name: "Diana",
          vote: 8.5,
          text: "Personaggi indimenticabili e una colonna sonora mozzafiato.",
          created_at: "2023-12-07T09:45:00Z",
          updated_at: "2023-12-08T11:30:00Z",
        },
        {
          id: 5,
          name: "Edward",
          vote: 6,
          text: "Un film discreto, ma mi aspettavo qualcosa di più coinvolgente.",
          created_at: "2023-12-09T15:10:00Z",
          updated_at: "2023-12-10T17:25:00Z",
        },
      ];*/
      

    return(
        <>
            <section className='review'>
                <div className='container'>

                  <button><ReviewFormCard movie_id={id} /></button>
                  { movie && movie?.reviews.map((review)=> <ReviewCard key={review.id} review={review} />)}
                    
                </div>
            

            </section>
        
        </>

    )
}
/**/