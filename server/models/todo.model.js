const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
    {
        task: {type: String},
        completed: {type: Boolean}
    }
);

const taskModel = model('task', taskSchema);

module.exports = {
    taskModel,
};