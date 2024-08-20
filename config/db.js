const mongoose = require("mongoose");
const dbConnect = async () => {
    return mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('connection to db established...'))
    .catch(() => console.log('connection to db failed'))
};
module.exports = dbConnect;