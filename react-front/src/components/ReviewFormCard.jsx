
import { useState } from "react"

export default function ReviewFormCard(movie_id, success, handleSuccess){

    const [username, setUsername] = useState('')
    const [rating, setRating] = useState('')
    const [review, setReview]= useState(0)

    function handleFormSubmit(e){

        e.preventDefault()
        console.log('here');
        

    }

    return (

        <>
            
            <div className='container'>
                <div className="card m-4">
                    <div className="card-body">
                        
                        <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <iput name="username" id="usarname" type="text" className="form-control" placeholder="name" value={username} onChange={(e)=> setUsername(e.target.username)} />
                        </div>

                        <div className="mb-3">
                            <textarea name="review" id="review" value={review} onChange={(e)=> setReview(e.target.review)}></textarea>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}