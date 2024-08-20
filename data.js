const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();  // Ensure dotenv is configured

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/user");

const app = express();
const PORT = process.env.PORT || 4000;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
});

const datamodal = mongoose.model("data", userSchema);

app.use(express.json());

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/get", (req, res) => {
  datamodal.find()
    .then((resu) => {
      res.json(resu);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server Error");
    });
});

app.post("/voice", (req, res) => {
  // Implement your logic here
});

const start = async () => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
};

start();





// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");


// // mongoose.connect("mongodb+srv://akeelakhtar71:yeBKEKB8sJdSp8gK@cluster0.047ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// mongoose.connect("mongodb://localhost:27017/user");

// const app = express();
// const PORT = process.env.PORT || 4000;

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   email: { type: String, required: true },
// });

// const datamodal = mongoose.model("data", userSchema);

// app.use(express.json());
// app.use(cors());

// app.get("/get", (req, res) => {
//   datamodal.find().then((resu) => {
//     res.json(resu);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).send("Internal server Error");
//   });
// });

// app.post("/voice", (req, res) => {
// });

// const Start = async () => {
//   app.listen(PORT, () => {
//     console.log("App is running on port",);
//   });
// };

// Start();






