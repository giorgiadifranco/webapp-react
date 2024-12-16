const connection = require('../database/connection');

function index(req, res) {

    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results)=>{

        console.log(results);
        

         res.json({
            movies: results,
            count: results.length
         })
    })

   
}


//funzione per lo show

function show (req, res){

   
    
        const id = req.params.id
        const sql = `SELECT * FROM movies WHERE id = ?`;
    
        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ err: err })
            if (results.length == 0) return res.status(404).json({ err: 'movie not found' })
        
            //console.log(results);
        
            // get all reviews associated to the book
            const sql = `SELECT * FROM reviews WHERE movie_id = ?`;
            connection.query(sql, [id], (err, reviewsResults) => {
              if (err) return res.status(500).json({ err: err })
        
              //console.log('reviews', reviewsResults);
              const movie = {
                ...results[0],
               reviews: reviewsResults
              }              
        
              res.json(movie)
        
            })
        
          })
    


}

function review(req, res) {
  const movie_id = req.params.id
  const {username, review, vote} = req.body
  const now = new Date()
  const reviewDate = `${now.getFullYear()} -${now.getMonth()}-${now.getDate()}`
  console.log(reviewDate);
  
  const sql = "INSERT INTO `reviews` SET name=?, text=?, vote=?, movie_id=?, created_at=?"

  connection.query(sql, [username, review, vote, movie_id, reviewDate], (err, result) => {

    console.log(err);
    

    if (err) return res.status(500).json({ error: err })
    return res.status(201).json({ success: true })
  })


  console.log(id, body);

  res.send('done')
  

}





module.exports = {
    index,
    show,
    review
}