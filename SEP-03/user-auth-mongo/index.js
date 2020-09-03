const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;
let recentSavedUser = {};
const uri =
  "mongodb+srv://yousuf:iwillnotforget@cluster1.2xgza.mongodb.net/testdatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(
      "Successfully connected to MongoDB\n--> cluster: user-management\n--> user: yousuf_login_management\n--> DB: usersList"
    )
  )
  .catch((err) => console.log("Review your password", err));
//Our code is connected to Database online

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email_ID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", usersSchema);

const createNewUser = async ({ name, mail, passw }) => {
  const user = new User({
    username: name,
    email_ID: mail,
    password: passw,
  });
  const new_user = await user.save();
  recentSavedUser = new_user;
  console.log("usercreated", "\n", new_user, "\n", recentSavedUser);
};

app.get("/signUP", (req, res) => {
  res.send("This is from GET");
});

app.post("/signUP", async (req, res) => {
  // console.log("This is available", req.body);
  const logInDetails = req.body;
  await createNewUser(logInDetails);
  res.send(recentSavedUser);
  // res.end("yes");
});

app.listen(port, () =>
  console.log(`Server is online at https://localhost:${port}`)
);
