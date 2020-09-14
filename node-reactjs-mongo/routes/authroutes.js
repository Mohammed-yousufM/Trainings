const express = require("express");
const router = express.Router();
const passport = require("passport");
// const path = require("path");

// const fileNamex = path.join(__dirname, "../static/index.html");

// router.get("/", (_req, res) => {
//   res.sendFile(fileNamex);
// });

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/callback", passport.authenticate("google"));

router.get("/user/logout", (req, res) => {
  req.logOut();
  res.send("you are now logged out");
});

router.get("/user/details", (req, res) => {
  res.send(req.user);
});

module.exports = router;
