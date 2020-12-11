const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        note: {type: String},
    }
);

const noteModel = model('note', noteSchema);

module.exports = {
    noteModel,
};