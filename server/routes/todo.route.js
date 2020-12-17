const { json } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { taskModel } = require(`../models/todo.model`);

router.get("/active-categories", async (req, res) => { 
    const docs = await taskModel
        .aggregate([
            {
                $match: {
                    completed:false
                }
            },
            {
                $group: {
                    _id: '$category',
                }
            }
        ])
        .exec();
    res.json(docs);
});

router.get("/:category", async (req, res) => { 
    const docs = await taskModel
        .find({"category": req.params.category})
        .exec();
    res.json(docs);
});

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
            "category": req.body.category,
            "completed": false
        })
    res.json(doc);
});

router.delete("/delete/all/:category", async (req, res) => { 
    const doc = await taskModel
        .deleteMany({
            "category": req.params.category,
            "completed": true
        })
    .then(function(){ 
        return(res.json(doc)); // Success 
    }).catch(function(error){ 
        return(res.json(error)); // Failure 
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