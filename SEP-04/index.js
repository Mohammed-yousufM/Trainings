const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
passport.use(
  new googleStrategy(
    {
      clientID: "**GOOGLE_CLIENT_ID_KEY**",
      clientSecret: "**GOOGLE_CLIENT_SECRET**",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);

app.get("/", (req, res) =>
  res.send("This is Home Page. \n Navigate to /auth/google")
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`The server is up and running on port: ${PORT}`)
);
