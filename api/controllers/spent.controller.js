const Spent = require("../models/spent.model.js");
const ObjectId = require('mongoose').Types.ObjectId;

// Create and Save a new Spent
exports.createSpent = (req, res) => {
  const spent = new Spent({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    date: Date, default: Date.now(),
    owner: req.body.userId,
  });
  spent
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Spent.",
      });
    });
};

// Retrieve all spents from the database.
exports.findAllSpents = (req, res) => {
  let owner_id = new ObjectId(req.userId);
  console.log(req.userId)
  Spent.find({ "owner": owner_id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving spents.",
      });
    });
};

// Find a single spent with a userId
exports.findOneSpent = (req, res) => {
  Spent.findById(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving spent with id " + req.params.spentId,
      });
    });
};

// Update a spent identified by the userId in the request
exports.updateSpent = (req, res) => {
  App.findByIdAndUpdate(
    req.params.spentId,
    {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        date: Date, default: Date.now(),
        owner: req.body.userId,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      return res.status(500).send({
        message: "Error updating spent with id " + req.params.spentId,
      });
    });
};

// Delete a spent with the specified userId in the request
exports.deleteSpent = (req, res) => {
  App.findByIdAndRemove(req.params.spentId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      res.send({ message: "Spent deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Spent not found with id " + req.params.spentId,
        });
      }
      return res.status(500).send({
        message: "Could not delete spent with id " + req.params.spentId,
      });
    });
};