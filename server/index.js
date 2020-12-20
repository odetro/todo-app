const express = require('express');
const path = require("path");
const app = express();
const { connect } = require('./db');

connect();

const todosRoute = require('./routes/todo.route');
const notesRoute = require('./routes/notes.route');

app.set("json spaces",2);
app.use(express.json());
app.use("/api/todos", todosRoute);
app.use("/api/notes", notesRoute);
app.use("/", express.static(path.join(__dirname, '../client/build')));

let port = 3001;
if(process.env.PORT) {
    port = process.env.PORT;
}

app.listen(port);