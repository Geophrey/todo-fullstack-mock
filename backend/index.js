//Main server file used for connecting to database etc

import express from "express"  //imported from "type": "module"

import cors from "cors" //essentially a middleware to allow this server to take get requests i think

const app = express()

const port = 8080 // can put this port in another file and import it

app.use(cors())

app.get(`/`, (req, res) => {
    res.json(`Hello World! (from server)`)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})