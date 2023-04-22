// Import the mongoose module
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");


// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);


//server
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:8081'
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const spentRouter = require("./routes/spent.routes.js")
const userRouter = require("./routes/user.routes.js")


/* ROUTING */

app.use(process.env.VERSION, spentRouter)
app.use(process.env.VERSION, userRouter)


// Define the database URL to connect to.
const mongoDB = process.env.MONGO_URI
const port = process.env.PORT



// Wait for database to connect, logging an error if there is a problem 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected to DB")

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
}

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});



