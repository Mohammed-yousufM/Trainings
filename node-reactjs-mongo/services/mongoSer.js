const mongoose = require("mongoose");

const herokuUsersSchema = new mongoose.Schema({
  profileId: String,
  name: String,
  email: String,
  photo: String,
});

mongoose.model("herokuUsers", herokuUsersSchema);
