
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
            <h3>Scrivi adesso la tua recensione!</h3>

            <div className='container'>
                <div className="card">
                    <div className="card-body">

                        <form onSubmit={handleFormSubmit}>
                            <iput name="username" type="text" className="form-control" placeholder="name" value={username} onChange={(e)=> setUsername(e.target.username)} />

                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}