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
  // Convertire id del film in un numero
  const movie_id = Number(req.params.id); // Usa Number() per la conversione
    if (isNaN(movie_id)) {
      return res.status(400).json({ error: "ID del film non valido" });
    }

  // Estrarre i dati dal corpo della richiesta
  const { username, review, vote } = req.body;
    if (!username || !review || !vote) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
    }

  // data
  const now = new Date();
  const reviewDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  console.log("Data recensione:", reviewDate);

  // Eseguire la query

  const sql = "INSERT INTO `reviews` SET name=?, text=?, vote=?, movie_id=?, created_at=?";
  
  connection.query(sql, [username, review, vote, movie_id, reviewDate], (err, result) => {
    if (err) {
      console.error("Errore durante l'inserimento:", err);
      return res.status(500).json({ error: "Errore interno del server" });
    }
    return res.status(201).json({ success: true, id: result.insertId });
  });
}








module.exports = {
    index,
    show,
    review
}