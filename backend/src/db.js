const mongoose = require("mongoose");

const uri = process.env.URLDB;

mongoose.connect(
  uri,
  {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
  },
  () => console.log("db conected successfully")
);
