export default function MovieCard({movie}){

    return(

        <>
            <div className='card p-3'>
                <h4 className='vote'>{movie.vote}</h4>
                <h3 className='title'>{movie.name}</h3>
                <p className='text'>{movie.text}</p>


            </div>
        
        </>

    )

}