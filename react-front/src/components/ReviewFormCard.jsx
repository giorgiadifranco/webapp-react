export default function ReviewFormCard( ){

    function handleFormSubmit(){

        e.preventDefault()
        console.log('here');
        

    }

    return (

        <>
            <h3>Scrivi adesso la tua recensione!</h3>

            <div className='container'>
                <div className="card">
                    <div className="card-body">

                        <form onSubmit={handleFormSubmit}></form>
                    </div>
                </div>
            </div>
        
        </>
    )
}