const Product = require("../models/practice.model"), mongoose = require('mongoose');

module.exports = {
    index: (req, res) => {
        Product.find().sort({"title": 1})
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    show: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updated => res.json( updated ))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
};