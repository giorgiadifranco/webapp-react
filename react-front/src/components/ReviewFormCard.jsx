
import { useState } from "react"

export default function ReviewFormCard(movie_id, success, handleSuccess){

    const [username, setUsername] = useState(' ')
    const [rating, setRating] = useState('')
    const [review, setReview]= useState(' ')

   

    function handleFormSubmit(e){

        e.preventDefault()
        console.log('here');

        //prendere il valore dell'username - value- review 
        const formData = {

            username,
            review,
            vote: rating
        }
        console.log(formData);

        //noi dobbiamo comunicare con il server i valori dell'oggetto formData
        const base_movie_rating_form = `http://localhost:3001/api/films/${movie_id}/review`
        console.log(base_movie_rating_form);
        
        fetch(base_movie_rating_form, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(data => {
              console.log(data);
    
              if (data.success) {
                handleSuccess('Thanks for your review')
    
    
                // reset the form fields
                setUsername('')
                setReview('')
                setRating(0)
    
                 
              }
    
            }).catch(err => console.log(err))
    
        }
        

    
        
        


    return (

        <>
            
            <div className="container">
                <div className="card m-4">
                    <div className="card-body">
                        
                        <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <input name="username" id="usarname" type="text" className="form-control" placeholder="name" value={username} onChange={(e)=> setUsername(e.target.value)} />
                        </div>
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <textarea name="review" id="review" value={review} onChange={(e)=> setReview(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark"><strong>Send</strong></button>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}