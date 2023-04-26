const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/ToDo");

const app = express();
app.use(express.json());
app.use(cors());

PORT = 4555;

// connect mongoose
mongoose
   .connect("mongodb://127.0.0.1:27017/mernToDo", { useNewUrlParser: true })
   .then(() => console.log("connected to DB"))
   .catch((error) => console.log("connection error", error.message));

// get to do list from Todo model
app.get("/todos", async (req, res) => {
   const todos = await Todo.find();
   res.json(todos);
});

//add new item in to do list in Todo model
app.get("/todo/new", (req, res) => {
   const todo = new Todo({
      text: req.body.text,
   });
   //save todo to the collection
   todo.save();

   res.json(todo);
});

//dete an item
app.delete("/todo/delete/:id", async (req, res) => {
   // find and delete item
   const result = await Todo.findByIdAndDelete(req.params.id);
   res.json(result);
});

app.listen(PORT, () => console.log("server started on port: ", PORT));
