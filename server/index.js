const express = require('express');
const app = express();
const { connect } = require('./db');
//const cors = require('cors')

connect();

const todosRoute = require('./routes/todo.route');

app.set("json spaces",2);
//app.use(cors());
app.use(express.json());
app.use("/api/todos", todosRoute);

app.listen(3001);