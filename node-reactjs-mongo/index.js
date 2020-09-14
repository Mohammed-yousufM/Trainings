const express = require("express");
require("./services/mongoSer");
require("./services/passportSer");
const mongoose = require("mongoose");
const authroute = require("./routes/authroutes");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

const app = express();
app.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", authroute);

const connectMongo = async () => {
  try {
    await mongoose.connect(keys.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "Successfully connected to MongoDB\n--> cluster: user-management\n--> user: yousuf_login_management\n--> DB: usersList"
    );
  } catch (error) {
    console.log("There's some error connecting to MongoDB\n", error);
  }
};
connectMongo();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is online and running on port ${PORT}...`)
);
