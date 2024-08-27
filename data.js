// require("dotenv").config({ path: "./config/config.env" });
// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const dbConnect = require("./config/db");

// const app = express();
// app.use(morgan("tiny"));
// app.use(express.json());

// const PORT = process.env.PORT || 4000;

// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || '*',
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   email: { type: String, required: true },
// });

// // This model will use the "data" collection in the "user" database
// const DataModel = mongoose.model("data", userSchema);

// app.get("/get", (req, res) => {
//   DataModel.find()
//     .then((resu) => {
//       res.json(resu);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Internal server error");
//     });
// });

// app.post("/voice", (req, res) => {
//   // Implement your logic here
// });

// const start = async () => {
//   try {
//     await dbConnect();
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error('Failed to start server:', err);
//   }
// };

// start();


// require("dotenv").config({path:"./config/config.env"});
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// require("dotenv").config();  // Ensure dotenv is configured

// mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/user");

// const dbConnect = require("./config/db");

// const app = express();
// app.use(morgan("tiny"));
// const PORT = process.env.PORT || 4000;

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   email: { type: String, required: true },
// });

// const datamodal = mongoose.model("data", userSchema);

// app.use(express.json());

// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || '*',
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// app.get("/get", (req, res) => {
//   datamodal.find()
//     .then((resu) => {
//       res.json(resu);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Internal server Error");
//     });
// });

// app.post("/voice", (req, res) => {
//   // Implement your logic here
// });

// const start = async () => {
//   app.listen(PORT, async() => {
//     try {
//       await dbConnect();
//       console.log('server on http://localhost:${PORT}')
//     } catch (err) {
//       console.log(err)
//     }
//   });
// };

// start();





// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");


// //mongoose.connect("mongodb+srv://akeelakhtar71:akeel123@cluster0.047ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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





const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = process.env.PORT || 4000;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
});

const datamodal = mongoose.model("data", userSchema);

app.use(express.json());
app.use(cors());

app.get("/get", (req, res) => {
  datamodal.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

app.post("/voice", (req, res) => {
  // Your POST logic here
  res.send("POST request received");
});

const Start = async () => {
  app.listen(PORT, () => {
    console.log("App is running on port", PORT);
  });
};

Start();

