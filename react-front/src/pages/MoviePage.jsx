import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from '../components/ReviewCard.jsx'
import ReviewFormCard from "../components/ReviewFormCard.jsx"; '../components/ReviewFormCard.jsx'

export default function MoviePage(){

  const {id}  = useParams()
  const [movie, setMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
 

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
  },[id])

  const toggleForm = () =>{
    setShowForm(!showForm);
  }
  


 
      

    return(
        <>
            <section className='review'>
                <div className='container'>

                  <btn className='btn btn-dark m-4 text-warning' onClick={toggleForm}>
                    {showForm ? 'Close' : 'Add Review'}
                  </btn>

                  {showForm && <ReviewFormCard movie_id={id} />}
                  
                  { movie && movie?.reviews.map((review)=> <ReviewCard key={review.id} review={review} />)}
                    
                </div>
            

            </section>
        
        </>

    )
}
/**/