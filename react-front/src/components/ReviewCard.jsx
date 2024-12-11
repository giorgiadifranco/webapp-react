export default function ReviewCard({review}) {



    return(
        <>
            
                <div className='review card mb-3'>
                    <div className='card-body'>
                        
                        <div className='vote'>
                            <strong>Vote:{review.vote}</strong>
                        </div>

                        <h3>{review.name}</h3>
                        <p>{review.text}</p>
                    </div>                    
                </div>
            
        
        
        </>



    )


}