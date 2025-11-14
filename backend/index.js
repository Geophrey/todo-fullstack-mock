//Main server file used for connecting to database etc

import express from "express"  //imported from "type": "module"

const app = express()

const port = 8080 // can put this port in another file and import it

app.get(`/`, (req, res) => {
    res.json(`Hellow World! (from server)`)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})