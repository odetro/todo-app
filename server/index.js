const express = require('express');
const app = express();
const { connect } = require('./db');

connect();

const todosRoute = require('./routes/todo.route');
const notesRoute = require('./routes/notes.route');

app.set("json spaces",2);
app.use(express.json());
app.use("/api/todos", todosRoute);
app.use("/api/notes", notesRoute);

app.listen(3001);