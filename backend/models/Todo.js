import mongoose from "mongoose";

//The schema will describe what the todo data will "look like"
const todoSchema = mongoose.Schema({
    text: { type: String, require: true },
    completed: { type: Boolean, default: false },
});

//the model will help to interact with the database and will use the schema to validate data being sent back and forth to the database; takes in: the name of schema, the actual schema (mongoose.Schema), and the optional collection name; this is stored in a variable to be exported

const Todo = mongoose.model(`todo`, todoSchema)

export default Todo