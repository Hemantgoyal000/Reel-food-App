const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect("mongodb://localhost:27017/Real-Food-App")
      .then(()=>{
        console.log("Mongodb Connected");
    })
    .catch((err)=>{
        console.log("Mongodb Connection Error:", err);
    })
}

module.exports = connectDB;