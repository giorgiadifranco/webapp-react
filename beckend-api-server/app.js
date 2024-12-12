const express = require('express');
const server = express();
const filmsRouter = require('./routes/films')

const cors = require ('cors');

const corsOption =  { origin: process.env.FRONT_ORIGIN,
    optionSuccessStatus: 200}
    console.log(corsOption);

    
    

    server.use(cors(corsOption))


const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || "localhost"




server.listen(PORT, () => { 

    console.log(`Server is listening on port: ${HOST}:${PORT}`);
    
} )


server.get( '/', (req, res) => {

    res.status(200).send({ message: "Server is running!" })

})

//rotta per tutti i films dei database

server.use('/api/films', filmsRouter)

