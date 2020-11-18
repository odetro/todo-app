const { json } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { taskModel } = require(`../models/todo.model`);

router.get("/", async (req, res) => { 
    const docs = await taskModel
        .find({})
        .exec();
    res.json(docs);
});

router.post("/", async (req, res) => { 
    const doc = await taskModel
        .create({
            "task": req.body.task,
            "completed": false
        })
    res.json(doc);
});

router.delete("/delete/all", async (req, res) => { 
    const doc = await taskModel
        .deleteMany({
            completed: true
        })
    .then(function(){ 
        return(doc); // Success 
    }).catch(function(error){ 
        return(error); // Failure 
    }); 
});

router.delete("/delete/:id", async (req, res) => { 
    const doc = await taskModel
        .findOneAndDelete({
            _id: req.params.id
        })
    res.json(doc);
});

router.put("/:id", async (req, res) => {
    let body = req.body;
    if (body.completed != undefined) {
        const doc = await taskModel
            .findOneAndUpdate(
                {_id: req.params.id},
                {completed: body.completed},
                {
                    useFindAndModify: false,
                    returnOriginal: false
                }
            )
            .exec();
        res.json(doc);
    }
    if (body.task != undefined) {
        const doc = await taskModel
            .findOneAndUpdate(
                {_id: req.params.id},
                {task: body.task},
                {useFindAndModify: false}
            )
            .exec();
        res.json(doc);
    }

});

module.exports = router;