const User = require("../models/user.model.js");

// Create and Save a new User
exports.createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    name: req.body.name,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    photo: req.body.photo,
    creationDate: Date, default: Date.now(),
    country: req.body.country,
    active: 1
  });
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all users from the database.
exports.findAllUsers = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a userId
exports.findOneUser = (req, res) => {
  User.findById(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.userId,
      });
    });
};

// Update a user identified by the userId in the request
exports.updateUser = (req, res) => {
  App.findByIdAndUpdate(
    req.params.userId,
    {
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        photo: req.body.photo,
        creationDate: Date, default: Date.now(),
        country: req.body.country,
        active: 1
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.userId,
      });
    });
};

// Delete a user with the specified userId in the request
exports.deleteUser = (req, res) => {
  App.findByIdAndRemove(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.userId,
      });
    });
};