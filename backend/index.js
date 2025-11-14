//Main server file used for connecting to database etc

import express from "express"; //imported from "type": "module"

import cors from "cors"; //essentially a middleware to allow this server to take get requests i think

import "dotenv/config";

import connectDB from "./database.js";

import Todo from "./models/Todo.js";

const app = express();

const port = 8080; // can put this port in another file and import it

app.use(cors());

app.get(`/`, (req, res) => {
    res.json(`Hello World! (from server)`);
});

app.get(`/todos`, async (req, res) => {
    //must use async/await because the data will not come instantly or something
    //use a try/catch whenever using async/await
    try {
        const todos = await Todo.find({});
        console.log(todos)

        res.status(200).json(todos);
    } catch (e) {
        console.log(`Something went wrong: ${e.message}`)
        res.status(400).json({error: e.message});
    }
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
    connectDB();
});
