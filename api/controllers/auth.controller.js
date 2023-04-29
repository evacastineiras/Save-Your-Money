const config = require("../config/auth.config");
const User = require("../models/user.model");
const Email = require("../services/email")

var randomWords = require('random-words');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        fullname: req.body.fullname,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        creationDate: new Date(Date.now()),
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
}

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      });
    });
};

exports.forgot = (req,res)=>{
  const {email} = req.body
  if (!email) {
    res.status(404).send(
      "Email sent is null"
    )
  }else{
    User.findOne({ email: email }).then((user) => {
      if (user) {
        let password = randomWords({ exactly: 2, join: ' ' })
        Email.sendEmail(email, password)
        //Password Hashing
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err
            password = hash
            User
              .updateOne({email: email}, {password: password})
              .then(res.status(200).send(
                "Please check your email"
              ))
              .catch((err) => console.log(err))
          })
        )
        
      } else {
        res.status(404).send(
          "Email doesn't exist"
        )
      }
  })
  }
}

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};