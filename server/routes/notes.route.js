const { json } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { noteModel } = require(`../models/note.model`);

router.get("/", async (req, res) => { 
    const docs = await noteModel
        .find({})
        .exec();
    res.json(docs);
});

router.put("/:id", async (req, res) => {
    let body = req.body;
    const doc = await noteModel
        .findOneAndUpdate(
            {_id: req.params.id},
            {note: body.note},
            {useFindAndModify: false}
        )
        .exec();
    res.json(doc);
});

module.exports = router;