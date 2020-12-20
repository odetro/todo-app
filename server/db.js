const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/todo-app';
if (process.env.DB_URL) {
    dbUrl = process.env.DB_URL;
}

async function connect() {
    await mongoose.connect(`${dbUrl}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    connect,
};