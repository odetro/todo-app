const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'todo-app';

async function connect() {
    await mongoose.connect(`${dbUrl}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    connect,
};